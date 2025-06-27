import { ArrowRight } from "lucide-react";
import Hero from "../assets/img/hero.png";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat px-6 md:px-12 py-20 rounded-3xl"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="max-w-4xl mx-auto text-center text-black">
        {/* Judul */}
        <h1 className="text-3xl md:text-5xl font-playfair font-semibold leading-snug">
          What’s Cooking Today?{" "}
          <br className="hidden md:block" />
          Find Your Next Delicious Recipe
        </h1>

        {/* Search bar */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-full shadow-md flex items-center px-6 py-3">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-base md:text-lg font-inter"
            />
            <button className="text-black hover:text-gray-600 transition">
              <ArrowRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
