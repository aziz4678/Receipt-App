import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getDefaultMeals,
  getMealsByCategory,
} from "../../redux/RecipeSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Category() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.recipe);
  const [selected, setSelected] = useState("All");

  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    const updateOffsetLimit = () => {
      if (containerRef.current && wrapperRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = wrapperRef.current.scrollWidth;
        const limit = Math.max(contentWidth - containerWidth, 0);
        setMaxOffset(limit);
        setOffset((prev) => Math.min(prev, limit));
      }
    };

    updateOffsetLimit();
    window.addEventListener("resize", updateOffsetLimit);
    return () => window.removeEventListener("resize", updateOffsetLimit);
  }, [categories]);

  const handleSelect = (cat) => {
    setSelected(cat);
    if (cat === "All") {
      dispatch(getDefaultMeals());
    } else {
      dispatch(getMealsByCategory(cat));
    }
  };

  const handlePrev = () => {
    setOffset((prev) => Math.max(prev - 200, 0));
  };

  const handleNext = () => {
    setOffset((prev) => Math.min(prev + 200, maxOffset));
  };

  return (
    <div className="w-full pt-6 pb-8 px-4 sm:px-10">
      <div className="flex items-center gap-2">
        {/* Button Navigation Left */}
        {offset > 0 && (
          <button
            onClick={handlePrev}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Content */}
        <div
          ref={containerRef}
          className="overflow-hidden flex-1"
        >
          <div
            ref={wrapperRef}
            className="flex gap-3 transition-transform duration-300 ease-in-out px-2"
            style={{
              transform: `translateX(-${offset}px)`,
            }}
          >
            {/* All Categories */}
            <button
              onClick={() => handleSelect("All")}
              className={`px-6 py-2 rounded-full font-inter border transition min-w-max ${
                selected === "All"
                  ? "bg-[#CCC4C4] text-black font-semibold shadow"
                  : "bg-gray-100 text-gray-500 hover:bg-[#eee]"
              }`}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat.idCategory}
                onClick={() => handleSelect(cat.strCategory)}
                className={`px-6 py-2 rounded-full font-inter border transition min-w-max ${
                  selected === cat.strCategory
                    ? "bg-[#CCC4C4] text-black font-semibold shadow"
                    : "bg-gray-100 text-gray-500 hover:bg-[#eee]"
                }`}
              >
                {cat.strCategory}
              </button>
            ))}
          </div>
        </div>

        {/* Button Navigation Right */}
        {offset < maxOffset && (
          <button
            onClick={handleNext}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
