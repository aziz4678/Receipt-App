import { CookingPot, Utensils, ListOrdered, Square } from "lucide-react";

const InfoSection = ({ ingredients, steps }) => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
          <CookingPot className="w-7 h-7 text-rose-600" />
          Let's Cook Together
        </h2>
        <p className="text-lg text-gray-600">Ingredients on the left, instructions on the right.</p>
        <div className="w-24 h-1 bg-gray-300 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
        {/* Ingredients */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-slate-700" />
            Ingredients
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ingredients.map((item, i) => (
              <li key={i} className="flex gap-4 items-center p-4 rounded-xl bg-gray-50 border border-slate-200 shadow-sm hover:shadow-md transition">
                <Square className="w-4 h-4 text-slate-500 mt-1 shrink-0" />
                <div>
                  <p className="font-medium capitalize text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.amount}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <ListOrdered className="w-5 h-5 text-gray-600" />
            Instructions
          </h3>
          <ol className="space-y-5">
            {steps.map((step, idx) => (
              <li key={step.id} className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white">
                <div className="w-9 h-9 mt-1 rounded-full bg-gray-800 text-white text-sm font-semibold flex items-center justify-center shadow ring-2 ring-white shrink-0">
                  {idx + 1}
                </div>
                <p className="text-gray-800 leading-relaxed text-sm md:text-base font-medium">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default InfoSection;
