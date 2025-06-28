import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDefaultMeals } from "../redux/RecipeSlice";
import Category from "./Recipe/Category";
import RecipeList from "./Recipe/RecipeList";
import SkeletonLoader from "./SkeletonLoader"; 

export default function RecipesSection() {
  const dispatch = useDispatch();
  const { meals, loading, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getDefaultMeals());
  }, [dispatch]);

  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      {/* Category Section */}
      <Category />

      {/* Loading Skeleton */}
      {loading && <SkeletonLoader type="recipe" />}

      {/* Error */}
      {error && (
        <div className="text-center text-red-500 font-inter mt-8">
          Error loading data.
        </div>
      )}

      {/* Recipes Content */}
      {!loading && !error && meals.length > 0 && (
        <RecipeList meals={meals} />
      )}

      {/* No Recipe */}
      {!loading && !error && meals.length === 0 && (
        <div className="text-center text-gray-400 font-inter mt-8">
          No recipes found.
        </div>
      )}
    </section>
  );
}
