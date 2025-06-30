import { useState } from "react";
import SEO from "../components/SEO"; 
import HeroSection from "../components/Home/HeroSection";
import RecipeSection from "../components/Home/RecipeSection";
import CommunitySection from "../components/Home/ComunitySection";
import CTASection from "../components/Home/CTASection";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <>
      <SEO
        title="MyRecipes | Explore Easy & Delicious Meals"
        description="Discover easy and delicious recipes with MyRecipes. Start your cooking journey today with meals everyone can make!"
        image="https://cdn.jsdelivr.net/npm/lucide-static/icons/chef-hat.svg"
        url={window.location.href}
      />

      <div className="px-6 py-10">
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
