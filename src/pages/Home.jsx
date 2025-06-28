import { useState } from "react";
import HeroSection from "../components/HeroSection";
import RecipeSection from "../components/RecipeSection";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <>
      <HeroSection query={query} setQuery={setQuery} />
      <RecipeSection query={query} />
    </>
  );
}
