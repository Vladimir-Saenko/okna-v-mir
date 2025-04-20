const defaultFont = "font-[family-name:var(--font-play)]";

export function FloatBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`w-60 md:w-72 h-32 bg-gradient-to-b from-white to-blue-100 rounded-lg shadow-md opacity-75 hover:opacity-100 px-5 py-4 text-center ${defaultFont}`}
    >
      <p className="[text-shadow:_0_2px_4px_rgb(30_136_229_/_0.7)]">
        {children}
      </p>
    </div>
  );
}

export default FloatBlock;
