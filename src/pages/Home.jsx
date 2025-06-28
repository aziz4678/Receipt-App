import { useState } from "react";
import HeroSection from "../components/HeroSection";
import RecipeSection from "../components/RecipeSection";
import CommunitySection from "../components/ComunitySection";
import CTASection from "../components/CTASection";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="px-6 py-10" >
        <HeroSection query={query} setQuery={setQuery} />
        <RecipeSection query={query} />
        <CommunitySection />
      </div>
      <div className="px-28 pb-20">
      <CTASection />
      </div>
    </>
  );
}
