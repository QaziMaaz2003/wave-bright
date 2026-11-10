/**
 * Stylised California outline with pinned office locations, drawn as inline SVG so it stays
 * crisp, themeable and editable. In WordPress: paste into a Custom HTML block.
 */
export type CoverageOffice = {
  city: string;
  region: string;
  sub?: string;
  x: number;
  y: number;
  labelSide: 'left' | 'right';
};

const CA_OUTLINE =
  'M132,14 L162,30 L178,78 L162,112 L184,142 L174,186 L196,220 L210,262 L192,296 L200,332 L174,354 L158,392 L130,380 L116,344 L92,324 L102,282 L78,250 L92,208 L70,172 L84,128 L66,92 L94,56 Z';

function Pin({ office }: { office: CoverageOffice }) {
  const tx = office.labelSide === 'left' ? office.x - 15 : office.x + 15;
  return (
    <g className="wb-map__office">
      <circle cx={office.x} cy={office.y} r="11" className="wb-map__ring" />
      <circle cx={office.x} cy={office.y} r="4" className="wb-map__dot" />
      <text
        x={tx}
        y={office.y - 2}
        textAnchor={office.labelSide === 'left' ? 'end' : 'start'}
        className="wb-map__city"
      >
        {office.city}
      </text>
      <text
        x={tx}
        y={office.y + 13}
        textAnchor={office.labelSide === 'left' ? 'end' : 'start'}
        className="wb-map__region"
      >
        {office.region}
        {office.sub ? ` · ${office.sub}` : ''}
      </text>
    </g>
  );
}

export function CoverageMap({ offices, caption }: { offices: CoverageOffice[]; caption: string }) {
  return (
    <svg className="wb-map" viewBox="0 0 260 420" role="img" aria-labelledby="map-title">
      <title id="map-title">Map of California showing Wavcomm&rsquo;s regional offices</title>
      <path className="wb-map__outline" d={CA_OUTLINE} />
      {offices.length > 1 && (
        <line
          className="wb-map__link"
          x1={offices[0].x}
          y1={offices[0].y}
          x2={offices[1].x}
          y2={offices[1].y}
        />
      )}
      {offices.map((o) => (
        <Pin key={o.city} office={o} />
      ))}
      <text x="16" y="402" className="wb-map__caption">
        {caption}
      </text>
    </svg>
  );
}
