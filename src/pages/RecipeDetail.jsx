import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMealDetail, clearMealDetail } from "../redux/RecipeSlice";
import Breadcrumb from "../components/Detail/Breadcrumb";
import HeroSection from "../components/Detail/HeroSection";
import InfoSection from "../components/Detail/InfoSection";
import { LoadingScreen, ErrorScreen } from "../components/Detail/Screen";


export default function RecipeDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { mealDetail, loading, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getMealDetail(id));
    return () => dispatch(clearMealDetail());
  }, [dispatch, id]);

  if (loading || !mealDetail) return <LoadingScreen />;
  if (error) return <ErrorScreen />;

  const ingredients = extractIngredients(mealDetail);
  const instructionSteps = extractInstructions(mealDetail);

  function extractIngredients(meal) {
  return Array.from({ length: 20 }, (_, i) => {
    const name = meal[`strIngredient${i + 1}`];
    const amount = meal[`strMeasure${i + 1}`];
    return name?.trim() ? { name, amount } : null;
  }).filter(Boolean);
}

function extractInstructions(meal) {
  const text = meal.strInstructions;
  if (/STEP\s*\d+/i.test(text)) {
    return text.split(/STEP\s*\d+/i).map((t) => t.trim()).filter(Boolean).map((text, idx) => ({ id: idx + 1, text }));
  }
  return text.split(/\r?\n|\.\s+/).map((t) => t.trim()).filter(Boolean).map((text, idx) => ({
    id: idx + 1,
    text: text.endsWith(".") ? text : `${text}.`,
  }));
}

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Breadcrumb title={mealDetail.strMeal} />
      <HeroSection meal={mealDetail} />
      <InfoSection ingredients={ingredients} steps={instructionSteps} />
    </div>
  );
}


