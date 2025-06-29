import { Link } from "react-router-dom";
import { Home, ChefHat } from "lucide-react";

export default function Breadcrumb({ title }) {
  return (
    <div className="container mx-auto px-6 flex justify-between items-center text-sm">
      <nav className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
        <Link to="/" className="flex items-center gap-1 text-gray-600 hover:underline font-medium">
          <Home className="w-4 h-4" /> Home
        </Link>
        <span className="text-gray-400">/</span>
        <span className="flex items-center gap-1 text-gray-800 font-medium">
          <ChefHat className="w-4 h-4" /> Recipes
        </span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 font-semibold">{title}</span>
      </nav>
    </div>
  );
}
