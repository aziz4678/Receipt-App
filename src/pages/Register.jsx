import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import SideInfo from "../components/Auth/SideInfo";
import InputField from "../components/Auth/InputField";
import ValidationHint from "../components/Auth/ValidationHint";
import Facts from "../components/Auth/Facts";

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % Facts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);
    const success = await register(
      formData.fullName,
      formData.email,
      formData.password,
      null
    );
    setIsLoading(false);

    if (success) {
      navigate("/login");
    }
  };

  const isPasswordValid = formData.password.length >= 8;
  const doPasswordsMatch =
    formData.password === formData.confirmPassword && formData.confirmPassword !== "";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <SideInfo Facts={Facts} factIndex={factIndex} />

        <div className="w-full bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mb-4 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Join MyReceipt</h1>
            <p className="text-gray-600 text-sm">Start your culinary adventure today</p>
          </div>

          <div className="space-y-5">
            <InputField
              label="Full Name"
              type="text"
              icon={<User className="w-5 h-5 text-gray-400" />}
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="John Doe"
            />

            <InputField
              label="Email Address"
              type="email"
              icon={<Mail className="w-5 h-5 text-gray-400" />}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="you@example.com"
            />

            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              icon={<Lock className="w-5 h-5 text-gray-400" />}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
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
            <ValidationHint isValid={isPasswordValid} text="At least 8 characters" />

            <InputField
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              icon={<Lock className="w-5 h-5 text-gray-400" />}
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              placeholder="••••••••"
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              }
            />
            {formData.confirmPassword && (
              <ValidationHint
                isValid={doPasswordsMatch}
                text={doPasswordsMatch ? "Passwords match" : "Passwords do not match"}
              />
            )}

            <div className="flex items-start gap-3 text-sm text-gray-600 leading-snug">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 accent-slate-900 border-gray-300 rounded"
              />
              <p>
                I agree to the{" "}
                <span className="text-slate-900 font-medium hover:underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-slate-900 font-medium hover:underline">
                  Privacy Policy
                </span>.
              </p>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading || !agreeTerms}
              className="w-full bg-slate-900 text-white font-semibold py-3 px-6 rounded-xl hover:bg-slate-800 transition-all duration-200 shadow-lg flex items-center justify-center group disabled:opacity-60"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-slate-900 font-semibold hover:text-black transition"
              >
                Sign in here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
