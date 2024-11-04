export function TTCLogo({ className = "" }: { className?: string }) {
  return (
    <svg
    viewBox="0 0 220 80"
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

    {/* First 'T' with playful cap */}
    <path
      d="M30 10 H70 M50 10 V70 Q45 65 50 60"
      stroke="url(#ttcGradient)"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      className="animate-draw"
    />

    {/* Second 'T' with different cap shape */}
    <path
      d="M90 10 H130 M110 10 V70 Q105 65 110 60"
      stroke="url(#ttcGradient)"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      className="animate-draw"
    />

    {/* Stylized 'C' with unique curve */}
    <path
      d="M160 30 Q140 20 140 40 Q140 60 160 50"
      stroke="url(#ttcGradient)"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
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