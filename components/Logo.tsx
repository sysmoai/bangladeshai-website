import Link from 'next/link'
import svgPaths from '@/lib/svg-paths'

interface LogoProps {
  variant?: 'full' | 'icon'
  className?: string
  light?: boolean
  size?: number
}

function BangladeshMapIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      role="img"
      aria-label="Bangladesh AI Logo"
    >
      <defs>
        <linearGradient id="liquidGrad" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#008866" />
          <stop offset="35%" stopColor="#006A4E" />
          <stop offset="100%" stopColor="#003d2b" />
        </linearGradient>
        <linearGradient id="primaryHighlight" x1="0%" y1="0%" x2="60%" y2="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="innerShadow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.05" />
          <stop offset="75%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
        </radialGradient>
        <radialGradient id="fresnelGlow" cx="50%" cy="50%">
          <stop offset="80%" stopColor="#00a876" stopOpacity="0" />
          <stop offset="100%" stopColor="#00e6b0" stopOpacity="0.45" />
        </radialGradient>
        <filter id="mapGlow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feFlood floodColor="#FFFFFF" floodOpacity="0.5" result="color" />
          <feComposite in="color" in2="blur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>

      <circle cx="200" cy="200" r="190" fill="url(#liquidGrad)" />
      <circle cx="200" cy="200" r="190" fill="url(#fresnelGlow)" />
      <circle cx="200" cy="200" r="190" fill="url(#innerShadow)" />

      <g opacity="0.12" stroke="#FFFFFF" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="200" cy="200" r="150" opacity="0.5" />
        <circle cx="200" cy="200" r="110" opacity="0.7" />
        <circle cx="200" cy="50" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="306" cy="94" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="350" cy="200" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="306" cy="306" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="200" cy="350" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="94" cy="306" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="50" cy="200" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="94" cy="94" r="4" fill="#FFFFFF" opacity="0.9" />
        <path d="M 200 50 L 200 200 M 306 94 L 200 200 M 350 200 L 200 200 M 306 306 L 200 200 M 200 350 L 200 200 M 94 306 L 200 200 M 50 200 L 200 200 M 94 94 L 200 200" />
      </g>

      <g filter="url(#mapGlow)">
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

      <ellipse
        cx="150"
        cy="120"
        rx="135"
        ry="95"
        fill="url(#primaryHighlight)"
        transform="rotate(-25 150 120)"
      />
      <circle cx="200" cy="200" r="189" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.15" />
      <circle cx="140" cy="100" r="22" fill="#FFFFFF" opacity="0.18" filter="url(#softGlow)" />
      <circle cx="136" cy="96" r="10" fill="#FFFFFF" opacity="0.3" />
    </svg>
  )
}

export default function Logo({ variant = 'full', className = '', light = false, size = 40 }: LogoProps) {
  const nameColor = light ? 'text-white' : 'text-primary-navy'
  const aiColor = light ? 'text-green-300' : 'text-bd-green'
  const taglineColor = light ? 'text-green-200/70' : 'text-text-secondary'

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`} aria-label="BangladeshAI Home">
      <BangladeshMapIcon size={size} />
      {variant === 'full' && (
        <div>
          <div className={`font-bold text-base leading-tight tracking-tight ${nameColor}`}>
            Bangladesh<span className={`font-extrabold ${aiColor}`}>AI</span>.org
          </div>
          <div className={`text-xs leading-tight tracking-widest uppercase ${taglineColor}`}>
            Intelligence Builds Nations
          </div>
        </div>
      )}
    </Link>
  )
}
