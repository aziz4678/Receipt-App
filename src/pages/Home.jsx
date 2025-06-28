import { useState } from "react";
import HeroSection from "../components/HeroSection";
import RecipeSection from "../components/RecipeSection";
import CommunitySection from "../components/ComunitySection";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <>
      <HeroSection query={query} setQuery={setQuery} />
      <RecipeSection query={query} />
      <CommunitySection />
    </>
  );
}
