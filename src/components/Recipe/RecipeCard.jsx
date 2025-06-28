export default function RecipeCard({ meal }) {

  return (
    <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-white group transition-all duration-300 hover:shadow-xl hover:scale-[1.025]">
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
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
          {meal.strMeal}
        </h3>

        {/* Button */}
        <button className="mt-3 inline-block text-[#F79F1A] text-sm font-medium hover:underline transition outline-none">
          View Recipe
        </button>
      </div>
    </div>
  );
}
