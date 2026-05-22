type LogoProps = {
  variant?: "inline" | "stacked";
  className?: string;
  invert?: boolean;
};

export default function Logo({
  variant = "inline",
  className = "",
  invert = false,
}: LogoProps) {
  const blue = invert ? "text-white" : "text-[#2952CC]";
  const black = invert ? "text-white/85" : "text-[#0f1626]";

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col leading-[0.95] ${className}`}>
        <span
          className={`font-extrabold tracking-tight text-[1.65rem] ${blue}`}
        >
          BLUES
        </span>
        <span
          className={`font-normal tracking-tight text-[1.5rem] -mt-0.5 ${black}`}
        >
          Cleaners
        </span>
      </div>
    );
  }

  return (
    <span className={`inline-flex items-baseline gap-2 leading-none ${className}`}>
      <span className={`font-extrabold tracking-tight ${blue}`}>BLUES</span>
      <span className={`font-normal ${black}`}>Cleaners</span>
    </span>
  );
}
