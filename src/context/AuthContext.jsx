import { createContext, useContext, useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import api from "../utils/Api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadSession = () => {
    const token = Cookies.get("auth_token");
    const userFromCookie = Cookies.get("user");

    if (token && userFromCookie) {
      try {
        const parsedUser = JSON.parse(userFromCookie);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (err) {
        Cookies.remove("user");
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadSession();

    const syncStorage = (e) => {
      if (["auth_token", "user"].includes(e.key)) {
        loadSession();
      }
    };

    window.addEventListener("storage", syncStorage);
    return () => window.removeEventListener("storage", syncStorage);
  }, []);

  const showAlert = (icon, title, text, color = "blue") => {
    Swal.fire({
      icon,
      title,
      text,
      customClass: {
        popup: "bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto",
        title: "text-xl font-bold text-gray-800 text-center",
        confirmButton: `bg-${color}-500 text-white px-6 py-2 rounded-md hover:bg-${color}-600`,
      },
    });
  };

  const login = useCallback(async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const { token, user } = res.data;

      Cookies.set("auth_token", token, { expires: 1, secure: true, sameSite: "Strict" });
      Cookies.set("user", JSON.stringify(user), { expires: 1, secure: true, sameSite: "Strict" });

      setUser(user);
      setIsAuthenticated(true);

      showAlert("success", "Login Successful!", "Welcome!", "blue");
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      showAlert("error", "Login Failed", error.response?.data?.msg || "Invalid email or password", "red");
      return false;
    }
  }, []);

  const register = useCallback(async (name, email, password, imageUrl) => {
    try {
      const res = await api.post("/auth/register", { name, email, password, imageUrl });

      showAlert("success", "Registration Successful", "You can now log in to your account.", "green");
      return true;

    } catch (error) {
      console.error("Registration failed:", error);
      showAlert("error", "Registration Failed", error.response?.data?.msg || "An error occurred.", "red");
      return false;
    }
  }, []);

  const logout = useCallback((navigate) => {
    Cookies.remove("auth_token");
    Cookies.remove("user");

    setUser(null);
    setIsAuthenticated(false);

    if (typeof navigate === "function") {
      navigate("/login");
    }

    showAlert("info", "Logged Out", "You have been logged out successfully.");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        register,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
