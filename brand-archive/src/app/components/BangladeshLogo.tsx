import svgPaths from "../../imports/svg-07alip6cox";

export default function BangladeshLogo() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
      {/* Circular Logo with Map */}
      <div className="relative w-full aspect-square max-w-md">
        <svg 
          className="w-full h-full"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ shapeRendering: 'geometricPrecision' }}
        >
          {/* Circle Background */}
          <circle 
            cx="250" 
            cy="250" 
            r="240" 
            fill="#006A4E"
          />
          
          {/* Bangladesh Map in White - Centered and Scaled */}
          <g transform="translate(145, 50) scale(0.5)">
            <g fill="#FFFFFF" stroke="none" fillRule="evenodd">
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
        </svg>
      </div>

      {/* Brand Name Below */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
          Bangladesh <span className="text-7xl">AI</span>
        </h1>
      </div>
    </div>
  );
}