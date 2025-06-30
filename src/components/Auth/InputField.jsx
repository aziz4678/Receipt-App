export default function InputField({ label, icon, rightIcon, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">{icon}</div>
        <input
          className="w-full py-3 pl-12 pr-12 bg-white text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 placeholder:text-gray-500"
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightIcon}</div>
        )}
      </div>
    </div>
  );
}
