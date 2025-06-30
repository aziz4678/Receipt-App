import { Link, useNavigate } from "react-router-dom";
import { LogIn, UserPlus, ChefHat, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";


export default function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-[#D8D9D8] px-4 py-3 md:px-8 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl md:text-3xl font-playfair font-semibold text-black hover:opacity-80 transition"
      >
        MyRecipes
        <ChefHat size={28} className="text-black" />
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          // If Login
          <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-1.5 shadow-sm hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-sm">
              {user?.name?.[0]?.toUpperCase() || "U"}
            </div>
            <span className="hidden sm:inline text-sm text-gray-800 font-medium">{user?.name || "User"}</span>
            <button
              onClick={() => logout(navigate)}
              className="text-gray-500 hover:text-red-600 transition"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        ) : (
          // If Not Logged In
          <div className="flex gap-2">
            <Link
              to="/register"
              className="flex items-center gap-1 bg-[#CCC4C4] text-black px-3 py-1.5 rounded-lg text-sm md:text-base font-playfair"
            >
              <UserPlus size={18} />
              <span className="hidden sm:inline">Sign Up</span>
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-1 bg-[#CCC4C4] text-black px-3 py-1.5 rounded-lg text-sm md:text-base font-playfair"
            >
              <LogIn size={18} />
              <span className="hidden sm:inline">Log In</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
