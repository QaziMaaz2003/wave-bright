/**
 * Illustrative cross-section of a wireless site, drawn as inline SVG so it stays crisp,
 * themeable and editable. In WordPress: paste into a Custom HTML block (or export as SVG
 * and use the Image block).
 */
const BASE_L = 190;
const BASE_R = 270;
const TOP_L = 228;
const TOP_R = 232;
const GROUND = 480;
const TOP = 60;
const LEVELS = 10;

const left = (y: number) => BASE_L + ((TOP_L - BASE_L) * (GROUND - y)) / (GROUND - TOP);
const right = (y: number) => BASE_R + ((TOP_R - BASE_R) * (GROUND - y)) / (GROUND - TOP);

function arc(radius: number, side: 1 | -1) {
  const cx = 230;
  const cy = 70;
  const a = (38 * Math.PI) / 180;
  const x = cx + side * radius * Math.cos(a);
  const y1 = cy - radius * Math.sin(a);
  const y2 = cy + radius * Math.sin(a);
  return `M ${x.toFixed(1)} ${y1.toFixed(1)} A ${radius} ${radius} 0 0 ${side === 1 ? 1 : 0} ${x.toFixed(1)} ${y2.toFixed(1)}`;
}

function Marker({ n, x, y, tx, ty }: { n: number; x: number; y: number; tx: number; ty: number }) {
  return (
    <g>
      <line x1={x} y1={y} x2={tx} y2={ty} className="wb-diagram__leader" />
      <circle cx={tx} cy={ty} r="3.5" className="wb-diagram__dot" />
      <circle cx={x} cy={y} r="13" className="wb-diagram__marker" />
      <text x={x} y={y + 4.5} textAnchor="middle" className="wb-diagram__num">
        {n}
      </text>
    </g>
  );
}

export function TowerDiagram() {
  const levels = Array.from({ length: LEVELS + 1 }, (_, i) => GROUND - (i * (GROUND - TOP)) / LEVELS);

  return (
    <svg
      className="wb-diagram"
      viewBox="0 0 520 520"
      role="img"
      aria-labelledby="diagram-title diagram-desc"
    >
      <title id="diagram-title">Anatomy of a wireless site</title>
      <desc id="diagram-desc">
        A lattice tower with antennas on top, a transmission line running down the tower, a waveguide
        bridge to an equipment building, and site civil work at ground level.
      </desc>

      {/* signal arcs */}
      {[38, 58, 78].map((r, i) => (
        <g key={r} className="wb-diagram__sig" style={{ animationDelay: `${i * 0.35}s` }}>
          <path d={arc(r, 1)} />
          <path d={arc(r, -1)} />
        </g>
      ))}

      {/* ground, road, foundation */}
      <rect x="0" y={GROUND} width="520" height="40" className="wb-diagram__ground" />
      <line x1="0" y1={GROUND} x2="520" y2={GROUND} className="wb-diagram__line" />
      <line x1="0" y1="500" x2="520" y2="500" className="wb-diagram__road" />
      <rect x="176" y={GROUND} width="108" height="22" className="wb-diagram__pad" />

      {/* tower */}
      <g className="wb-diagram__tower">
        <line x1={BASE_L} y1={GROUND} x2={TOP_L} y2={TOP} />
        <line x1={BASE_R} y1={GROUND} x2={TOP_R} y2={TOP} />
        {levels.map((y, i) => (
          <line key={`h${i}`} x1={left(y)} y1={y} x2={right(y)} y2={y} />
        ))}
        {levels.slice(0, -1).map((y, i) => {
          const y2 = levels[i + 1];
          return i % 2 === 0 ? (
            <line key={`d${i}`} x1={left(y)} y1={y} x2={right(y2)} y2={y2} />
          ) : (
            <line key={`d${i}`} x1={right(y)} y1={y} x2={left(y2)} y2={y2} />
          );
        })}
      </g>

      {/* antennas */}
      <g className="wb-diagram__antenna">
        <rect x="217" y="46" width="8" height="48" rx="1" />
        <rect x="235" y="46" width="8" height="48" rx="1" />
        <line x1="240" y1="150" x2="254" y2="150" />
        <ellipse cx="262" cy="150" rx="8" ry="19" />
        <line x1="206" y1="215" x2="214" y2="215" />
        <ellipse cx="198" cy="215" rx="8" ry="19" />
      </g>

      {/* transmission line */}
      <path d="M 238 96 L 272 440" className="wb-diagram__feed" />

      {/* waveguide bridge */}
      <g className="wb-diagram__bridge">
        <line x1="272" y1="432" x2="360" y2="432" />
        <line x1="272" y1="448" x2="360" y2="448" />
        <polyline points="272,448 284,432 296,448 308,432 320,448 332,432 344,448 356,432" />
        <line x1="312" y1="448" x2="312" y2={GROUND} />
        <line x1="350" y1="448" x2="350" y2={GROUND} />
      </g>

      {/* equipment building */}
      <g className="wb-diagram__building">
        <rect x="360" y="410" width="130" height="70" />
        <line x1="354" y1="410" x2="496" y2="410" />
        <rect x="380" y="440" width="22" height="40" />
        <rect x="430" y="428" width="38" height="20" />
      </g>

      <Marker n={1} x={310} y={52} tx={244} ty={68} />
      <Marker n={2} x={110} y={290} tx={left(290)} ty={290} />
      <Marker n={3} x={312} y={378} tx={312} ty={432} />
      <Marker n={4} x={440} y={366} tx={440} ty={410} />
      <Marker n={5} x={92} y={430} tx={130} ty={491} />
      <Marker n={6} x={340} y={232} tx={252} ty={232} />
    </svg>
  );
}
