const OFFSETS = [0, 47, 94, 141, 188, 235, 282, 329];

export function DecorLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1604 600"
      fill="none"
      className={`pointer-events-none absolute h-auto ${className}`}
    >
      {OFFSETS.map((y) => (
        <path
          key={y}
          d={`M1604 ${y + 1}L0 ${y + 269}`}
          stroke="#FFA028"
          strokeOpacity="0.21"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}
