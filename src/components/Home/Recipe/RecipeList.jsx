import { useState } from "react";
import RecipeCard from "./RecipeCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecipeList({ meals }) {
  const perPage = 6;
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(meals.length / perPage);
  const isMobile = window.innerWidth < 640;

  const handlePrev = () => setPage((p) => Math.max(p - 1, 0));
  const handleNext = () => setPage((p) => Math.min(p + 1, maxPage - 1));
  const handleShowMore = () => setPage((p) => Math.min(p + 1, maxPage - 1));
  const mobileMeals = meals.slice(0, (page + 1) * perPage);

  return (
    <div className="relative w-full py-6">
      {/* Button Left Navigation (Dekstop) */}
      {!isMobile && page > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 sm:flex"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Content */}
      {!isMobile ? (
        // Dekstop
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / maxPage) * page}%)`,
              width: `${100 * maxPage}%`,
            }}
          >
            {Array.from({ length: maxPage }).map((_, index) => (
              <div
                key={index}
                className="w-full shrink-0 px-4 py-4 sm:px-6 md:px-12 xl:px-24"
                style={{ width: `${100 / maxPage}%` }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {meals
                    .slice(index * perPage, index * perPage + perPage)
                    .map((meal) => (
                      <RecipeCard key={meal.idMeal} meal={meal} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Mobile
        <div className="px-4">
          <div className="grid grid-cols-1 gap-6">
            {mobileMeals.map((meal) => (
              <RecipeCard key={meal.idMeal} meal={meal} />
            ))}
          </div>

          {/* Button Show More */}
          {page < maxPage - 1 && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleShowMore}
                className="text-sm text-white bg-[#F79F1A] hover:bg-[#e7900c] font-semibold px-6 py-2 rounded-full shadow transition"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      )}

      {/* Button Navigation Right (Dekstop) */}
      {!isMobile && page < maxPage - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 sm:flex"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}
