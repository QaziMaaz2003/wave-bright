export type IconName =
  | 'arrow'
  | 'phone'
  | 'check'
  | 'menu'
  | 'close'
  | 'pin'
  | 'wave'
  | 'tower'
  | 'antenna'
  | 'hardhat'
  | 'building'
  | 'swap'
  | 'gauge'
  | 'shield'
  | 'clock'
  | 'tag'
  | 'file'
  | 'mail'
  | 'clipboard'
  | 'crosshair'
  | 'pulse'
  | 'cross'
  | 'sliders';

const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  check: <path d="M4 12.5l5 5L20 6.5" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M5 5l14 14M19 5L5 19" />,
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  wave: <path d="M3 14c2.5-7 5-7 7.5 0s5 7 7.5 0c.9-2.5 1.8-3.5 3-3.5" />,
  tower: <path d="M12 2v3M8 22l3.2-16h1.6L16 22M9.6 15h4.8M10.4 11h3.2M7 19h10M10.8 7.6l3.6 7.4M13.2 7.6L9.6 15" />,
  antenna: (
    <>
      <circle cx="12" cy="11" r="1.4" />
      <path d="M12 12.5V21M8.5 21h7M8.2 7.8a5 5 0 0 0 0 6.4M15.8 7.8a5 5 0 0 1 0 6.4M5.4 5a9 9 0 0 0 0 12M18.6 5a9 9 0 0 1 0 12" />
    </>
  ),
  hardhat: <path d="M3 17h18M5 17a7 7 0 0 1 14 0M12 6v6M9.5 8.5V17M14.5 8.5V17" />,
  building: <path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6M3 21h18M9 10h6" />,
  swap: <path d="M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4" />,
  gauge: <path d="M4 17a8 8 0 1 1 16 0M12 17l4-5.5M8 21h8" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 5-5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  tag: <path d="M12 3v18M16.2 7.6C15.4 6.6 14 6 12 6 9.5 6 8 7.2 8 9s1.5 2.5 4 3 4 1.2 4 3-1.5 3-4 3c-2 0-3.4-.6-4.2-1.6" />,
  file: <path d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6" />,
  mail: <path d="M3 6h18v12H3zM3 7l9 6.5L21 7" />,
  clipboard: <path d="M9 4h6v3H9zM9 5.5H6V21h12V5.5h-3M9 12h6M9 16h4" />,
  crosshair: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 2v5M12 17v5M2 12h5M17 12h5" />
    </>
  ),
  pulse: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  cross: <path d="M12 3v18M3 12h18M6.5 6.5l11 11M17.5 6.5l-11 11" />,
  sliders: <path d="M4 8h9M17 8h3M4 16h3M11 16h9M13 6v4M7 14v4" />,
};

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={name === 'wave' ? 2.6 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
