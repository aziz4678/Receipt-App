export default function ValidationHint({ isValid, text }) {
  return (
    <div className="mt-1 text-xs flex items-center">
      <div
        className={`w-2 h-2 rounded-full mr-2 ${
          isValid ? "bg-green-400" : "bg-red-400"
        }`}
      />
      <span className={isValid ? "text-green-600" : "text-red-600"}>{text}</span>
    </div>
  );
}
