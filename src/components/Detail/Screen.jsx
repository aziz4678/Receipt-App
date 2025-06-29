import { ChefHat } from "lucide-react";

export const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
    <div className="text-center">
      <ChefHat className="w-12 h-12 text-orange-600 mx-auto mb-4 animate-bounce" />
      <div className="text-xl font-semibold text-orange-800">Preparing your recipe...</div>
    </div>
  </div>
);

export const ErrorScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
    <div className="text-center py-20 text-red-600 bg-white rounded-2xl shadow-lg px-8">
      <div className="text-6xl mb-4">🍳</div>
      <div className="text-xl font-semibold">Oops! Recipe not found in our kitchen.</div>
    </div>
  </div>
);
