export function TTCLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ttcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#ff00c1", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#00fff9", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ff00c1", stopOpacity: 1 }} />
          <animate
            attributeName="x1"
            values="0%;100%;0%"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="100%;200%;100%"
            dur="3s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>

      <path
        d="M10 40L30 10H50L70 40M40 25H60M90 10V40M110 10V40M130 10V40M150 10H190V20H170V40"
        stroke="url(#ttcGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw"
      />
      
      <style>{`
        @keyframes draw {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-draw {
          stroke-dasharray: 1000;
          animation: draw 2s ease-out forwards;
        }
      `}</style>
    </svg>
  );
}