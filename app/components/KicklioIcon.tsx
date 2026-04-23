export function KicklioIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center rounded-[18px] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.08)] ${className}`}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="50" y="64"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Inter, Arial, sans-serif"
              fontSize="92"
              fontWeight="700"
              fill="#8a3044">
          k
        </text>
        <circle cx="78" cy="66" r="9" fill="#327281" />
      </svg>
    </div>
  );
}
