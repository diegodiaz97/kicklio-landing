import Image from "next/image";

type Variant = 'white' | 'black' | 'primary' | 'secondary';

const colorMap: Record<Variant, { text: string; dot: string }> = {
  white: { text: '#ffffff', dot: '#ffffff' },
  black: { text: '#000000', dot: '#000000' },
  primary: { text: '#8a3044', dot: '#327281' },
  secondary: { text: '#327281', dot: '#8a3044' },
};

export function KicklioLogotype({
  variant = 'primary',
  className = "h-12 w-auto"
}: {
  variant?: Variant;
  className?: string;
}) {
  const colors = colorMap[variant];

  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="90"
          fontWeight="700"
          fill={colors.text}
        >
          kicklio
        </text>
        <circle cx="454" cy="122" r="8" fill={colors.dot} />
      </svg>
    </div>
  );
}