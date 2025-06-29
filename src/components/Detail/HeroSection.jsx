import { ChefHat, Flame, Youtube, Timer, Users, BarChart3, Utensils, Globe } from "lucide-react";

const HeroSection = ({ meal }) => (
  <section className="container mx-auto px-6 py-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-stretch">
    {/* Left - Meal Image */}
    <div className="relative">
      <div className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 p-4 rounded-3xl shadow-2xl border border-slate-200/50 h-full">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-[380px] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-500"
        />
        <div className="absolute -top-3 -right-3 bg-gradient-to-br from-gray-800 to-gray-600 text-white p-3 rounded-full shadow-lg ring-4 ring-white">
          <ChefHat className="w-6 h-6" />
        </div>
        <div className="absolute -bottom-3 -left-3 bg-gradient-to-br from-orange-500 to-rose-500 text-white p-3 rounded-full shadow-lg ring-4 ring-white">
          <Flame className="w-6 h-6" />
        </div>
      </div>
    </div>

    {/* Right - Info */}
    <div className="h-full flex flex-col justify-between bg-white/90 backdrop-blur-md p-10 rounded-3xl border border-slate-200/50 shadow-2xl">
      <div>
        <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">
          {meal.strMeal}
        </h1>

        {/* Tags */}
        <div className="flex gap-3 mt-4 flex-wrap">
          <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-semibold border border-gray-300 shadow-sm">
            <Utensils className="w-4 h-4" /> {meal.strCategory}
          </span>
          <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-semibold border border-gray-300 shadow-sm">
            <Globe className="w-4 h-4" /> {meal.strArea}
          </span>
        </div>
      </div>

      {/* YouTube */}
      {meal.strYoutube && (
        <div className="mt-6">
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm font-bold rounded-2xl shadow-lg hover:shadow-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Youtube className="w-5 h-5" />
            Watch Tutorial
          </a>
        </div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-3 gap-5 mt-8">
        {[{ icon: Timer, label: "Cook Time", value: "15 Mins" },
          { icon: Users, label: "Serves", value: "3 Serving" },
          { icon: BarChart3, label: "Difficulty", value: "Easy" },
        ].map(({ icon: Icon, label, value }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-800 shadow hover:shadow-md transition-all"
          >
            <div className="p-3 rounded-full mb-3 bg-gray-800 text-white shadow">
              <Icon className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-gray-500">{label}</p>
            <p className="font-bold text-sm">{value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
