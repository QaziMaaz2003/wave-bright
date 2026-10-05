/** Decorative tower line-art for the site-log cards (three silhouettes: lattice, monopole, guyed). */
export function TowerArt({ variant = 0 }: { variant?: number }) {
  const v = variant % 3;
  return (
    <svg className="wb-towerart" viewBox="0 0 160 220" fill="none" aria-hidden="true" focusable="false">
      {v === 0 && (
        <g>
          <path d="M80 10 L48 212 M80 10 L112 212" />
          <path d="M61 82 H99 M55 120 H105 M51 150 H109 M47 180 H113 M44 210 H116" />
          <path d="M70 46 L99 82 L55 120 L105 150 L51 180 L113 212" />
          <path d="M66 30 H94" />
        </g>
      )}
      {v === 1 && (
        <g>
          <path d="M76 10 L72 212 M84 10 L88 212" />
          <path d="M56 38 H104 M60 88 H100 M56 138 H104" />
          <circle cx="104" cy="38" r="4" />
          <circle cx="56" cy="88" r="4" />
        </g>
      )}
      {v === 2 && (
        <g>
          <path d="M80 8 V212" />
          <path d="M80 28 L18 210 M80 28 L142 210 M80 84 L40 210 M80 84 L120 210 M80 140 L58 210 M80 140 L102 210" />
          <path d="M62 28 H98 M66 84 H94" />
        </g>
      )}
    </svg>
  );
}
