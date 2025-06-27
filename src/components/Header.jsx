import { Link } from "react-router-dom";
import { LogIn, UserPlus, ChefHat } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#D8D9D8] px-4 py-3 md:px-8 flex items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl md:text-3xl font-playfair font-semibold text-black hover:opacity-80 transition"
      >
        MyReceipt
        <ChefHat size={28} className="text-black" />
      </Link>

      {/* Navigation + Button */}
      <div className="flex items-center gap-4">
         <div className="flex gap-2">
          <Link
            to="/signup"
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
      </div>
    </header>
  );
}
