import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import RecipeSection from "./components/RecipeSection";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 px-6 py-10">
        <HeroSection />
        <RecipeSection />
      </main>
      <Footer />
    </div>
  );
}
