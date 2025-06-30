import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Swal from "sweetalert2";

export default function RecipeCard({ meal }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClick = () => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "You need to log in to view the recipe details.",
        confirmButtonColor: "#F79F1A",
      });
      return;
    }

    navigate(`/recipe/${meal.idMeal}`);
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-white group transition-all duration-300 hover:shadow-xl hover:scale-[1.025] cursor-pointer"
    >
      {/* image */}
      <div className="relative overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
          {meal.strMeal}
        </h3>
        <button
          className="mt-3 inline-block text-[#F79F1A] text-sm font-medium hover:underline transition outline-none"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
