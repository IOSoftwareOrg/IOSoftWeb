type IllustrationProps = {
  className?: string;
  label: string;
};

const FRAME = (
  <rect x="1" y="1" width="478" height="318" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" />
);

// ─── Services ─────────────────────────────────────────────────────────────

export function StrategyIllustration({ className, label }: IllustrationProps) {
  const points = [
    [70, 240],
    [160, 195],
    [230, 220],
    [310, 130],
    [400, 80],
  ];
  return (
    <svg viewBox="0 0 480 320" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <polyline points={points.map((p) => p.join(",")).join(" ")} fill="none" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {points.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#c9a84c" />
      ))}
      <circle cx="410" cy="70" r="26" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
      <line x1="410" y1="52" x2="410" y2="88" stroke="white" strokeOpacity="0.55" strokeWidth="1.5" />
      <line x1="392" y1="70" x2="428" y2="70" stroke="white" strokeOpacity="0.55" strokeWidth="1.5" />
    </svg>
  );
}

export function ManagementIllustration({ className, label }: IllustrationProps) {
  const nodes = [
    [240, 70],
    [140, 160],
    [240, 160],
    [340, 160],
    [190, 250],
    [290, 250],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
    [2, 4],
    [2, 5],
    [3, 5],
  ];
  return (
    <svg viewBox="0 0 480 320" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      {edges.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={i === 0 ? 14 : 10} fill={i === 0 ? "#c9a84c" : "white"} fillOpacity={i === 0 ? 1 : 0.85} />
      ))}
    </svg>
  );
}

export function FinanceIllustration({ className, label }: IllustrationProps) {
  const bars = [
    [80, 190, 40],
    [150, 150, 80],
    [220, 210, 20],
    [290, 110, 120],
    [360, 70, 160],
  ];
  return (
    <svg viewBox="0 0 480 320" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <line x1="60" y1="240" x2="420" y2="240" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      {bars.map(([x, y, h]) => (
        <rect key={x} x={x} y={y} width="34" height={h} rx="3" fill={x === 360 ? "#c9a84c" : "white"} fillOpacity={x === 360 ? 1 : 0.5} />
      ))}
      <circle cx="150" cy="80" r="22" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeOpacity="0.7" />
      <path d="M150 68v24M142 76h16M142 84h16" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.9" />
    </svg>
  );
}

export function ProcessMiningIllustration({ className, label }: IllustrationProps) {
  const nodes = [
    [80, 160],
    [190, 90],
    [190, 230],
    [310, 90],
    [310, 230],
    [410, 160],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 5],
  ];
  return (
    <svg viewBox="0 0 480 320" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      {edges.map(([a, b]) => {
        const [x1, y1] = nodes[a];
        const [x2, y2] = nodes[b];
        const midX = (x1 + x2) / 2;
        return (
          <g key={`${a}-${b}`}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
            <polygon points={`${midX},${(y1 + y2) / 2 - 5} ${midX + 8},${(y1 + y2) / 2} ${midX},${(y1 + y2) / 2 + 5}`} fill="#c9a84c" />
          </g>
        );
      })}
      {nodes.map(([x, y], i) => (
        <rect key={`${x}-${y}`} x={x - 16} y={y - 14} width="32" height="28" rx="6" fill={i === 5 ? "#c9a84c" : "white"} fillOpacity={i === 5 ? 1 : 0.85} />
      ))}
    </svg>
  );
}

export function DataConsultingIllustration({ className, label }: IllustrationProps) {
  const dots = [
    [80, 220],
    [110, 180],
    [140, 240],
    [170, 160],
    [200, 200],
    [230, 130],
    [260, 190],
  ];
  return (
    <svg viewBox="0 0 480 320" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      {dots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="white" fillOpacity="0.5" />
      ))}
      <rect x="300" y="80" width="140" height="160" rx="10" fill="rgba(255,255,255,0.06)" stroke="white" strokeOpacity="0.3" />
      <rect x="320" y="180" width="18" height="40" rx="2" fill="#c9a84c" />
      <rect x="348" y="150" width="18" height="70" rx="2" fill="white" fillOpacity="0.6" />
      <rect x="376" y="120" width="18" height="100" rx="2" fill="#c9a84c" fillOpacity="0.7" />
      <rect x="404" y="160" width="18" height="60" rx="2" fill="white" fillOpacity="0.6" />
    </svg>
  );
}

export function WebAgentsIllustration({ className, label }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <rect x="60" y="70" width="230" height="160" rx="10" fill="rgba(255,255,255,0.06)" stroke="white" strokeOpacity="0.35" />
      <line x1="60" y1="100" x2="290" y2="100" stroke="white" strokeOpacity="0.3" />
      <circle cx="78" cy="85" r="4" fill="#c9a84c" />
      <circle cx="94" cy="85" r="4" fill="white" fillOpacity="0.5" />
      <circle cx="110" cy="85" r="4" fill="white" fillOpacity="0.5" />
      <rect x="80" y="120" width="150" height="12" rx="6" fill="white" fillOpacity="0.4" />
      <rect x="80" y="145" width="100" height="12" rx="6" fill="white" fillOpacity="0.3" />
      <circle cx="380" cy="150" r="34" fill="none" stroke="#c9a84c" strokeWidth="2" />
      <circle cx="380" cy="150" r="8" fill="#c9a84c" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 380 + Math.cos(rad) * 34;
        const y = 150 + Math.sin(rad) * 34;
        return <circle key={deg} cx={x} cy={y} r="4" fill="white" fillOpacity="0.7" />;
      })}
      <line x1="290" y1="150" x2="346" y2="150" stroke="white" strokeOpacity="0.3" strokeDasharray="4 4" />
    </svg>
  );
}

export function SoftwareDevIllustration({ className, label }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <path d="M170 100 L110 160 L170 220" fill="none" stroke="#c9a84c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M310 100 L370 160 L310 220" fill="none" stroke="#c9a84c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="255" y1="90" x2="225" y2="230" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
      <rect x="80" y="70" width="320" height="180" rx="10" fill="none" stroke="white" strokeOpacity="0.15" />
    </svg>
  );
}

export function TechnicalWritingIllustration({ className, label }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <rect x="150" y="60" width="180" height="220" rx="8" fill="rgba(255,255,255,0.06)" stroke="white" strokeOpacity="0.35" />
      <rect x="175" y="90" width="130" height="10" rx="5" fill="#c9a84c" />
      {[120, 145, 170, 195, 220, 245].map((y) => (
        <rect key={y} x="175" y={y} width={y === 245 ? 70 : 130} height="8" rx="4" fill="white" fillOpacity="0.35" />
      ))}
    </svg>
  );
}

export function InfoSystemsIllustration({ className, label }: IllustrationProps) {
  const nodes = [
    [240, 80],
    [140, 160],
    [340, 160],
    [190, 250],
    [290, 250],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [1, 2],
  ];
  return (
    <svg viewBox="0 0 480 320" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      {edges.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <rect key={`${x}-${y}`} x={x - 20} y={y - 16} width="40" height="32" rx="6" fill={i === 0 ? "#c9a84c" : "rgba(255,255,255,0.08)"} stroke="white" strokeOpacity="0.4" />
      ))}
    </svg>
  );
}

// ─── Blog ─────────────────────────────────────────────────────────────────

export function ClaudeBestPracticesIllustration({ className, label }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 200" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <path d="M70 60 h140 a14 14 0 0 1 14 14 v50 a14 14 0 0 1 -14 14 h-100 l-30 26 v-26 h-10 a14 14 0 0 1 -14 -14 v-50 a14 14 0 0 1 14 -14 z" fill="rgba(255,255,255,0.08)" stroke="white" strokeOpacity="0.4" />
      <circle cx="330" cy="100" r="7" fill="#c9a84c" />
      <circle cx="380" cy="70" r="5" fill="white" fillOpacity="0.6" />
      <circle cx="400" cy="120" r="5" fill="white" fillOpacity="0.6" />
      <circle cx="360" cy="140" r="5" fill="white" fillOpacity="0.6" />
      <line x1="330" y1="100" x2="380" y2="70" stroke="white" strokeOpacity="0.3" />
      <line x1="330" y1="100" x2="400" y2="120" stroke="white" strokeOpacity="0.3" />
      <line x1="330" y1="100" x2="360" y2="140" stroke="white" strokeOpacity="0.3" />
    </svg>
  );
}

export function AiManagementIllustration({ className, label }: IllustrationProps) {
  const nodes = [
    [240, 50],
    [140, 110],
    [240, 110],
    [340, 110],
    [190, 165],
    [290, 165],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
    [3, 5],
  ];
  return (
    <svg viewBox="0 0 480 200" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      {edges.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={i === 0 ? 13 : 8} fill={i === 0 ? "#c9a84c" : "white"} fillOpacity={i === 0 ? 1 : 0.8} />
      ))}
      <path d="M255 35 l6 6 -6 6 -6 -6z" fill="#c9a84c" />
    </svg>
  );
}

export function TaktTimeIllustration({ className, label }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 200" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <line x1="60" y1="140" x2="420" y2="140" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
      {[60, 150, 240, 330, 420].map((x, i) => (
        <rect key={x} x={x - 14} y={i % 2 === 0 ? 90 : 105} width="28" height="28" rx="4" fill={i === 4 ? "#c9a84c" : "white"} fillOpacity={i === 4 ? 1 : 0.55} />
      ))}
      <circle cx="410" cy="55" r="22" fill="none" stroke="#c9a84c" strokeWidth="2" />
      <line x1="410" y1="55" x2="410" y2="40" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
      <line x1="410" y1="55" x2="420" y2="60" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ManagementControlIllustration({ className, label }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 200" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <path d="M120 150 A90 90 0 0 1 300 150" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="10" />
      <path d="M120 150 A90 90 0 0 1 250 75" fill="none" stroke="#c9a84c" strokeWidth="10" />
      <circle cx="210" cy="150" r="6" fill="white" />
      <line x1="210" y1="150" x2="260" y2="100" stroke="white" strokeWidth="3" strokeLinecap="round" />
      {[[350, 130, 30], [385, 100, 60], [420, 150, 15]].map(([x, y, h]) => (
        <rect key={x} x={x} y={y} width="16" height={h} rx="2" fill="white" fillOpacity="0.5" />
      ))}
    </svg>
  );
}

export function FinancialLeverageIllustration({ className, label }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 200" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <line x1="130" y1="70" x2="330" y2="120" stroke="white" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" />
      <circle cx="230" cy="95" r="8" fill="#c9a84c" />
      <line x1="230" y1="95" x2="230" y2="150" stroke="white" strokeOpacity="0.4" strokeWidth="2" />
      <line x1="130" y1="70" x2="130" y2="100" stroke="white" strokeOpacity="0.6" strokeWidth="2" />
      <line x1="115" y1="100" x2="145" y2="100" stroke="white" strokeOpacity="0.6" strokeWidth="2" />
      <line x1="330" y1="120" x2="330" y2="150" stroke="#c9a84c" strokeWidth="2" />
      <line x1="308" y1="150" x2="352" y2="150" stroke="#c9a84c" strokeWidth="2" />
      <polyline points="360,140 385,110 410,60" fill="none" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SwotMatrixIllustration({ className, label }: IllustrationProps) {
  const quadrants: [number, number, string][] = [
    [90, 55, "#c9a84c"],
    [250, 55, "rgba(255,255,255,0.5)"],
    [90, 115, "rgba(255,255,255,0.5)"],
    [250, 115, "rgba(255,255,255,0.3)"],
  ];
  return (
    <svg viewBox="0 0 480 200" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <line x1="240" y1="40" x2="240" y2="170" stroke="white" strokeOpacity="0.3" />
      <line x1="80" y1="105" x2="400" y2="105" stroke="white" strokeOpacity="0.3" />
      {quadrants.map(([x, y, fill]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="140" height="40" rx="4" fill={fill} />
      ))}
    </svg>
  );
}

export function MarketingIllustration({ className, label }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 200" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <path d="M120 90 l60 -25 v70 l-60 -25 z" fill="rgba(255,255,255,0.6)" />
      <path d="M180 65 a45 45 0 0 1 0 50" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="6" />
      <circle cx="310" cy="90" r="8" fill="#c9a84c" />
      <circle cx="310" cy="90" r="22" fill="none" stroke="#c9a84c" strokeOpacity="0.6" strokeWidth="2" />
      <circle cx="310" cy="90" r="38" fill="none" stroke="#c9a84c" strokeOpacity="0.3" strokeWidth="2" />
      <line x1="120" y1="90" x2="100" y2="90" stroke="white" strokeOpacity="0.5" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function SecurityIllustration({ className, label }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 200" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <rect x="140" y="60" width="200" height="120" rx="8" fill="rgba(255,255,255,0.06)" stroke="white" strokeOpacity="0.3" />
      <line x1="140" y1="88" x2="340" y2="88" stroke="white" strokeOpacity="0.25" />
      <circle cx="158" cy="74" r="3" fill="#c9a84c" />
      <path d="M240 100 a24 24 0 0 1 48 0 v10 h6 a4 4 0 0 1 4 4 v26 a4 4 0 0 1 -4 4 h-64 a4 4 0 0 1 -4 -4 v-26 a4 4 0 0 1 4 -4 h6 z" fill="none" stroke="#c9a84c" strokeWidth="3" />
      <circle cx="264" cy="128" r="4" fill="#c9a84c" />
    </svg>
  );
}

export function GdpIllustration({ className, label }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 200" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <circle cx="180" cy="100" r="60" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      <ellipse cx="180" cy="100" rx="60" ry="24" fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" />
      <line x1="180" y1="40" x2="180" y2="160" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" />
      <polyline points="290,150 330,110 360,130 410,60" fill="none" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {[[290, 150], [330, 110], [360, 130], [410, 60]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#c9a84c" />
      ))}
    </svg>
  );
}

export function BusinessTransferIllustration({ className, label }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 200" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      <circle cx="150" cy="100" r="26" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="330" cy="100" r="26" fill="none" stroke="#c9a84c" strokeWidth="2" />
      <line x1="176" y1="100" x2="304" y2="100" stroke="white" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="6 6" />
      <path d="M280 92 l24 8 -24 8" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TechnostructureIllustration({ className, label }: IllustrationProps) {
  const nodes = [
    [240, 45],
    [170, 100],
    [310, 100],
    [120, 160],
    [220, 160],
    [260, 160],
    [360, 160],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
  ];
  return (
    <svg viewBox="0 0 480 200" role="img" aria-label={label} className={className} xmlns="http://www.w3.org/2000/svg">
      {FRAME}
      {edges.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={i === 0 ? 12 : 8} fill={i === 0 ? "#c9a84c" : "white"} fillOpacity={i === 0 ? 1 : 0.7} />
      ))}
    </svg>
  );
}
