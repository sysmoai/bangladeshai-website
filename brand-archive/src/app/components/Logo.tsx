import svgPaths from "../../imports/svg-07alip6cox";

// Bangladesh AI Logo - Ultimate Premium Glass Finish
// Apple-level liquid glass aesthetic with CRYSTAL CLEAR map

interface LogoProps {
  size?: number;
  color?: string;
}

export default function Logo({ 
  size = 400,
  color = "#006A4E" // Official Bangladesh flag green
}: LogoProps) {
  
  return (
    <svg 
      width={size} 
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-full max-h-full"
      role="img"
      aria-label="Bangladesh AI Logo"
    >
      <title>Bangladesh AI</title>
      
      <defs>
        {/* Rich liquid gradient with multiple stops for depth */}
        <linearGradient id="liquidGrad" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#008866" />
          <stop offset="15%" stopColor="#007556" />
          <stop offset="35%" stopColor="#006A4E" />
          <stop offset="60%" stopColor="#005A41" />
          <stop offset="80%" stopColor="#004d38" />
          <stop offset="100%" stopColor="#003d2b" />
        </linearGradient>
        
        {/* Primary glass highlight - curved arc like Apple sphere */}
        <linearGradient id="primaryHighlight" x1="0%" y1="0%" x2="60%" y2="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        
        {/* Secondary soft glow */}
        <radialGradient id="secondaryGlow" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        
        {/* Inner shadow for realistic depth */}
        <radialGradient id="innerShadow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.05" />
          <stop offset="65%" stopColor="#000000" stopOpacity="0" />
          <stop offset="90%" stopColor="#000000" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
        </radialGradient>
        
        {/* Fresnel effect for glass edges */}
        <radialGradient id="fresnelGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#006A4E" stopOpacity="0" />
          <stop offset="80%" stopColor="#00a876" stopOpacity="0" />
          <stop offset="95%" stopColor="#00c996" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00e6b0" stopOpacity="0.5" />
        </radialGradient>
        
        {/* Drop shadow for floating effect */}
        <filter id="dropShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Soft glow for particles */}
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        
        {/* Map glow - ONLY behind the map, keeps map CRISP */}
        <filter id="mapGlow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
          <feFlood floodColor="#FFFFFF" floodOpacity="0.6" result="color" />
          <feComposite in="color" in2="offsetBlur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Drop shadow base */}
      <circle cx="200" cy="200" r="190" fill="#006A4E" opacity="0.25" filter="url(#dropShadow)" />
      
      {/* Main circle with rich gradient */}
      <circle cx="200" cy="200" r="190" fill="url(#liquidGrad)" />
      
      {/* Fresnel edge glow for glass realism */}
      <circle cx="200" cy="200" r="190" fill="url(#fresnelGlow)" />
      
      {/* Inner shadow for depth */}
      <circle cx="200" cy="200" r="190" fill="url(#innerShadow)" />
      
      {/* AI Neural Network - Reduced opacity so map stands out */}
      <g opacity="0.14" stroke="#FFFFFF" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Three concentric rings */}
        <circle cx="200" cy="200" r="150" opacity="0.5" />
        <circle cx="200" cy="200" r="115" opacity="0.7" />
        <circle cx="200" cy="200" r="80" opacity="0.9" />
        
        {/* Outer layer - 8 neural nodes (perfectly positioned) */}
        <circle cx="200" cy="50" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="306.07" cy="93.93" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="350" cy="200" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="306.07" cy="306.07" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="200" cy="350" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="93.93" cy="306.07" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="50" cy="200" r="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="93.93" cy="93.93" r="4" fill="#FFFFFF" opacity="0.9" />
        
        {/* Middle layer - 8 nodes */}
        <circle cx="200" cy="85" r="3" fill="#FFFFFF" opacity="0.85" />
        <circle cx="281.07" cy="118.93" r="3" fill="#FFFFFF" opacity="0.85" />
        <circle cx="315" cy="200" r="3" fill="#FFFFFF" opacity="0.85" />
        <circle cx="281.07" cy="281.07" r="3" fill="#FFFFFF" opacity="0.85" />
        <circle cx="200" cy="315" r="3" fill="#FFFFFF" opacity="0.85" />
        <circle cx="118.93" cy="281.07" r="3" fill="#FFFFFF" opacity="0.85" />
        <circle cx="85" cy="200" r="3" fill="#FFFFFF" opacity="0.85" />
        <circle cx="118.93" cy="118.93" r="3" fill="#FFFFFF" opacity="0.85" />
        
        {/* Inner layer - 8 nodes */}
        <circle cx="200" cy="120" r="2.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="256.57" cy="143.43" r="2.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="280" cy="200" r="2.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="256.57" cy="256.57" r="2.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="200" cy="280" r="2.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="143.43" cy="256.57" r="2.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="120" cy="200" r="2.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="143.43" cy="143.43" r="2.5" fill="#FFFFFF" opacity="0.8" />
        
        {/* Connection paths - outer to middle */}
        <path d="M 200 50 L 200 85" />
        <path d="M 306.07 93.93 L 281.07 118.93" />
        <path d="M 350 200 L 315 200" />
        <path d="M 306.07 306.07 L 281.07 281.07" />
        <path d="M 200 350 L 200 315" />
        <path d="M 93.93 306.07 L 118.93 281.07" />
        <path d="M 50 200 L 85 200" />
        <path d="M 93.93 93.93 L 118.93 118.93" />
        
        {/* Connection paths - middle to inner */}
        <path d="M 200 85 L 200 120" />
        <path d="M 281.07 118.93 L 256.57 143.43" />
        <path d="M 315 200 L 280 200" />
        <path d="M 281.07 281.07 L 256.57 256.57" />
        <path d="M 200 315 L 200 280" />
        <path d="M 118.93 281.07 L 143.43 256.57" />
        <path d="M 85 200 L 120 200" />
        <path d="M 118.93 118.93 L 143.43 143.43" />
      </g>
      
      {/* Circuit board corners - refined details */}
      <g opacity="0.14" stroke="#FFFFFF" strokeWidth="1" fill="none" strokeLinecap="round">
        {/* Top-left circuit */}
        <path d="M 60 60 L 100 60 M 80 60 L 80 80 M 60 60 L 60 100 M 60 80 L 80 80" />
        <circle cx="60" cy="60" r="3.5" fill="#FFFFFF" />
        <circle cx="100" cy="60" r="1.8" fill="#FFFFFF" opacity="0.7" />
        <circle cx="60" cy="100" r="1.8" fill="#FFFFFF" opacity="0.7" />
        
        {/* Top-right circuit */}
        <path d="M 340 60 L 300 60 M 320 60 L 320 80 M 340 60 L 340 100 M 340 80 L 320 80" />
        <circle cx="340" cy="60" r="3.5" fill="#FFFFFF" />
        <circle cx="300" cy="60" r="1.8" fill="#FFFFFF" opacity="0.7" />
        <circle cx="340" cy="100" r="1.8" fill="#FFFFFF" opacity="0.7" />
        
        {/* Bottom-left circuit */}
        <path d="M 60 340 L 100 340 M 80 340 L 80 320 M 60 340 L 60 300 M 60 320 L 80 320" />
        <circle cx="60" cy="340" r="3.5" fill="#FFFFFF" />
        <circle cx="100" cy="340" r="1.8" fill="#FFFFFF" opacity="0.7" />
        <circle cx="60" cy="300" r="1.8" fill="#FFFFFF" opacity="0.7" />
        
        {/* Bottom-right circuit */}
        <path d="M 340 340 L 300 340 M 320 340 L 320 320 M 340 340 L 340 300 M 340 320 L 320 320" />
        <circle cx="340" cy="340" r="3.5" fill="#FFFFFF" />
        <circle cx="300" cy="340" r="1.8" fill="#FFFFFF" opacity="0.7" />
        <circle cx="340" cy="300" r="1.8" fill="#FFFFFF" opacity="0.7" />
      </g>
      
      {/* Digital grid - minimal and clean */}
      <g opacity="0.07" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2,3">
        <line x1="200" y1="15" x2="200" y2="385" />
        <line x1="15" y1="200" x2="385" y2="200" />
        <line x1="70" y1="70" x2="330" y2="330" />
        <line x1="330" y1="70" x2="70" y2="330" />
      </g>
      
      {/* AI Data particles - reduced opacity to not compete with map */}
      <g opacity="0.25">
        {/* Larger particles */}
        <circle cx="135" cy="90" r="2.5" fill="#FFFFFF" filter="url(#softGlow)" />
        <circle cx="265" cy="90" r="2.5" fill="#FFFFFF" filter="url(#softGlow)" />
        <circle cx="310" cy="135" r="2.5" fill="#FFFFFF" filter="url(#softGlow)" />
        <circle cx="310" cy="265" r="2.5" fill="#FFFFFF" filter="url(#softGlow)" />
        <circle cx="265" cy="310" r="2.5" fill="#FFFFFF" filter="url(#softGlow)" />
        <circle cx="135" cy="310" r="2.5" fill="#FFFFFF" filter="url(#softGlow)" />
        <circle cx="90" cy="265" r="2.5" fill="#FFFFFF" filter="url(#softGlow)" />
        <circle cx="90" cy="135" r="2.5" fill="#FFFFFF" filter="url(#softGlow)" />
        
        {/* Medium particles */}
        <circle cx="120" cy="120" r="1.8" fill="#FFFFFF" opacity="0.7" />
        <circle cx="280" cy="120" r="1.8" fill="#FFFFFF" opacity="0.7" />
        <circle cx="280" cy="280" r="1.8" fill="#FFFFFF" opacity="0.7" />
        <circle cx="120" cy="280" r="1.8" fill="#FFFFFF" opacity="0.7" />
        
        {/* Small particles */}
        <circle cx="165" cy="75" r="1.3" fill="#FFFFFF" opacity="0.5" />
        <circle cx="235" cy="75" r="1.3" fill="#FFFFFF" opacity="0.5" />
        <circle cx="325" cy="165" r="1.3" fill="#FFFFFF" opacity="0.5" />
        <circle cx="325" cy="235" r="1.3" fill="#FFFFFF" opacity="0.5" />
        <circle cx="235" cy="325" r="1.3" fill="#FFFFFF" opacity="0.5" />
        <circle cx="165" cy="325" r="1.3" fill="#FFFFFF" opacity="0.5" />
        <circle cx="75" cy="235" r="1.3" fill="#FFFFFF" opacity="0.5" />
        <circle cx="75" cy="165" r="1.3" fill="#FFFFFF" opacity="0.5" />
      </g>
      
      {/* Hexagonal AI geometry - subtle but visible */}
      <g opacity="0.11" stroke="#FFFFFF" strokeWidth="0.7" fill="none" strokeLinejoin="miter">
        <path d="M 200 35 L 220 46 L 220 68 L 200 79 L 180 68 L 180 46 Z" />
        <path d="M 365 200 L 354 220 L 332 220 L 321 200 L 332 180 L 354 180 Z" />
        <path d="M 200 365 L 180 354 L 180 332 L 200 321 L 220 332 L 220 354 Z" />
        <path d="M 35 200 L 46 180 L 68 180 L 79 200 L 68 220 L 46 220 Z" />
      </g>
      
      {/* Bangladesh Map - CRYSTAL CLEAR with subtle glow behind */}
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
      
      {/* Primary glass highlight - curved reflection */}
      <ellipse 
        cx="150" 
        cy="120" 
        rx="140" 
        ry="100" 
        fill="url(#primaryHighlight)" 
        transform="rotate(-25 150 120)"
      />
      
      {/* Secondary soft glow */}
      <circle cx="200" cy="200" r="190" fill="url(#secondaryGlow)" />
      
      {/* Specular highlight - small bright spot */}
      <circle cx="140" cy="100" r="25" fill="#FFFFFF" opacity="0.2" filter="url(#softGlow)" />
      <circle cx="135" cy="95" r="12" fill="#FFFFFF" opacity="0.35" />
      
      {/* Outer glass rim - bright edge */}
      <circle 
        cx="200" 
        cy="200" 
        r="189" 
        fill="none" 
        stroke="#FFFFFF" 
        strokeWidth="1.5" 
        opacity="0.15"
      />
      
      {/* Inner rim for 3D depth */}
      <circle 
        cx="200" 
        cy="200" 
        r="184" 
        fill="none" 
        stroke="#000000" 
        strokeWidth="1" 
        opacity="0.12"
      />
      
      {/* Subtle bevel highlight on edge */}
      <circle 
        cx="200" 
        cy="200" 
        r="187" 
        fill="none" 
        stroke="#FFFFFF" 
        strokeWidth="0.5" 
        opacity="0.25"
        strokeDasharray="3,2"
      />
    </svg>
  );
}