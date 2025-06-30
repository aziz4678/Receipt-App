import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ChefHat, Eye, EyeOff, LogIn } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import SideInfo from "../components/Auth/SideInfo";
import InputField from "../components/Auth/InputField";
import Facts from "../components/Auth/Facts";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % Facts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) return;
    setIsLoading(true);
    const success = await login(formData.email, formData.password);
    setIsLoading(false);
    if (success) navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <SideInfo facts={Facts} factIndex={factIndex} />

        <div className="w-full bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-4 shadow-lg">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Login</h1>
            <p className="text-gray-600 text-sm">Login to continue your culinary journey</p>
          </div>

          <div className="space-y-5">
            <InputField
              label="Email Address"
              type="email"
              icon={<Mail className="w-5 h-5 text-gray-400" />}
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="you@example.com"
            />

            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              icon={<Lock className="w-5 h-5 text-gray-400" />}
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="••••••••"
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              }
            />

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-slate-900 text-white font-semibold py-3 px-6 rounded-xl hover:bg-slate-800 transition-all duration-200 shadow-lg flex items-center justify-center group disabled:opacity-60"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Login
                  <LogIn className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-slate-900 font-semibold hover:text-black transition"
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
