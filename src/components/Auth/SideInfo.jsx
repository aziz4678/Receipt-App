export default function AuthSideInfo({ facts, factIndex }) {
  const currentFact = facts?.[factIndex] || "Let's cook something great today!";

  return (
    <div className="hidden lg:flex flex-col justify-center px-8 py-12 relative">
      <div className="mb-6 space-y-2">
        <p className="text-sm text-slate-500 font-medium mb-1">✨ Let's Get Started</p>
        <h2 className="text-2xl font-bold text-slate-800">
          Create your account to begin your cooking journey!
        </h2>
      </div>

      <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl shadow-sm transition-all duration-500">
        <p className="text-sm font-medium text-slate-600 mb-1">📢 Did You Know?</p>
        <p className="text-sm text-slate-700">{currentFact}</p>
      </div>

      <div className="absolute top-4 right-10 text-4xl opacity-10 animate-bounce">🍝</div>
      <div className="absolute bottom-8 left-4 text-3xl opacity-10 animate-pulse">🍅</div>
      <div className="absolute top-1/2 right-0 text-2xl opacity-10 animate-spin-slow">🥕</div>
    </div>
  );
}
