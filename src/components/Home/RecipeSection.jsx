import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDefaultMeals, searchMeals } from "../../redux/RecipeSlice";
import Category from "./Recipe/Category";
import RecipeList from "./Recipe/RecipeList";
import SkeletonLoader from "../SkeletonLoader";

export default function RecipeSection({ query }) {
  const dispatch = useDispatch();
  const { meals, loading, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    if (query.trim() !== "") {
      dispatch(searchMeals(query));
    } else {
      dispatch(getDefaultMeals());
    }
  }, [dispatch, query]);

  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      {/* Category */}
      {query.trim() === "" && <Category />}

      {/* Show search result heading */}
      {query.trim() !== "" && (
        <h2 className="text-xl font-semibold font-inter mb-6 text-gray-700 text-center">
          Hasil pencarian: "<span className="text-black">{query}</span>"
        </h2>
      )}

      {/* Loading skeleton */}
      {loading && <SkeletonLoader type="recipe" />}

      {/* Error message */}
      {error && (
        <div className="text-center text-red-500 font-inter mt-8">
          Error loading data.
        </div>
      )}

      {/* Recipe List */}
      {!loading && !error && meals.length > 0 && (
        <RecipeList meals={meals} />
      )}

      {/* Not Found */}
      {!loading && !error && meals.length === 0 && (
        <div className="text-center text-gray-400 font-inter mt-8">
          No recipes found.
        </div>
      )}
    </section>
  );
}