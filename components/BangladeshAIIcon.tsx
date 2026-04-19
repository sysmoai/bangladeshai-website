import svgPaths from '@/lib/icon-paths'

interface BangladeshAIIconProps {
  size?: number
  className?: string
}

export default function BangladeshAIIcon({ size = 36, className = '' }: BangladeshAIIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BangladeshAI.org logo"
    >
      <defs>
        <linearGradient id="bai-grad" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#008866" />
          <stop offset="35%" stopColor="#006A4E" />
          <stop offset="100%" stopColor="#003d2b" />
        </linearGradient>
        <linearGradient id="bai-highlight" x1="0%" y1="0%" x2="60%" y2="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="bai-inner" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.05" />
          <stop offset="90%" stopColor="#000000" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
        </radialGradient>
        <radialGradient id="bai-fresnel" cx="50%" cy="50%">
          <stop offset="80%" stopColor="#00a876" stopOpacity="0" />
          <stop offset="95%" stopColor="#00c996" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00e6b0" stopOpacity="0.5" />
        </radialGradient>
        <filter id="bai-map-glow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feFlood floodColor="#FFFFFF" floodOpacity="0.6" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bai-glow">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>

      {/* Main green circle */}
      <circle cx="200" cy="200" r="190" fill="url(#bai-grad)" />
      <circle cx="200" cy="200" r="190" fill="url(#bai-fresnel)" />
      <circle cx="200" cy="200" r="190" fill="url(#bai-inner)" />

      {/* Subtle neural ring */}
      <circle cx="200" cy="200" r="150" opacity="0.09" stroke="#FFFFFF" strokeWidth="1" fill="none" />
      <circle cx="200" cy="200" r="115" opacity="0.12" stroke="#FFFFFF" strokeWidth="1" fill="none" />

      {/* Bangladesh Map — crystal clear with glow */}
      <g filter="url(#bai-map-glow)">
        <g transform="translate(110, 67) scale(0.42)">
          <g fill="#FFFFFF" fillRule="evenodd" stroke="none">
            <path d={svgPaths.pcba0880} />
            <path d={svgPaths.p29903100} />
            <path d={svgPaths.p300d0e40} />
            <path d={svgPaths.p232b00} />
            <path d={svgPaths.p3ea18b00} />
            <path d={svgPaths.p337ee780} />
            <path d={svgPaths.p30526900} />
            <path d={svgPaths.p95b26a0} />
          </g>
        </g>
      </g>

      {/* Glass highlight */}
      <ellipse
        cx="150"
        cy="120"
        rx="140"
        ry="100"
        fill="url(#bai-highlight)"
        transform="rotate(-25 150 120)"
      />

      {/* Specular spot */}
      <circle cx="135" cy="95" r="12" fill="#FFFFFF" opacity="0.3" />

      {/* Outer rim */}
      <circle cx="200" cy="200" r="189" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.15" />
    </svg>
  )
}
