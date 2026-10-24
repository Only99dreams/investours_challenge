function Svg({ size = 20, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Sparkle(props) {
  return (
    <Svg {...props}>
      <path d="M12 3.2l1.8 5.1 5.1 1.8-5.1 1.8L12 17l-1.8-5.1-5.1-1.8 5.1-1.8L12 3.2Z" />
      <path d="M18.4 15.6l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7Z" />
    </Svg>
  );
}

export function ArrowRight(props) {
  return (
    <Svg {...props}>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </Svg>
  );
}

export function ArrowUpRight(props) {
  return (
    <Svg {...props}>
      <path d="M6.5 17.5 17.5 6.5" />
      <path d="M8 6.5h9.5V16" />
    </Svg>
  );
}

export function Check(props) {
  return (
    <Svg {...props}>
      <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
    </Svg>
  );
}

export function Trophy(props) {
  return (
    <Svg {...props}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5.5H5v1a3.5 3.5 0 0 0 3.5 3.5H9" />
      <path d="M16 5.5h3v1a3.5 3.5 0 0 1-3.5 3.5H15" />
      <path d="M12 13v4" />
      <path d="M8.5 20h7" />
    </Svg>
  );
}

export function Calendar(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01" />
    </Svg>
  );
}

export function Coins(props) {
  return (
    <Svg {...props}>
      <ellipse cx="9" cy="6.5" rx="6" ry="2.8" />
      <path d="M3 6.5v5c0 1.55 2.69 2.8 6 2.8s6-1.25 6-2.8v-5" />
      <path d="M3 11.5v5c0 1.55 2.69 2.8 6 2.8s6-1.25 6-2.8v-5" />
      <path d="M18 8.9c1.8.5 3 1.35 3 2.35v5c0 1.4-2.16 2.56-5 2.76" />
    </Svg>
  );
}

export function Cap(props) {
  return (
    <Svg {...props}>
      <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z" />
      <path d="M6.5 11.5v4.2c0 1.3 2.5 2.3 5.5 2.3s5.5-1 5.5-2.3v-4.2" />
      <path d="M21.5 9.5v5" />
    </Svg>
  );
}

export function Medal(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="9" r="5.2" />
      <circle cx="12" cy="9" r="1.6" />
      <path d="M8.6 13.3 7 21l5-2.8L17 21l-1.6-7.7" />
    </Svg>
  );
}

export function Chart(props) {
  return (
    <Svg {...props}>
      <path d="M3.5 20.5h17" />
      <path d="M6.5 20.5v-6" />
      <path d="M11 20.5V9" />
      <path d="M15.5 20.5v-4.5" />
      <path d="M20 20.5V5" />
    </Svg>
  );
}

export function Star(props) {
  return (
    <Svg {...props}>
      <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.9L12 3.5Z" />
    </Svg>
  );
}

export function Expand(props) {
  return (
    <Svg {...props}>
      <path d="M9 3.5H3.5V9M15 3.5h5.5V9M9 20.5H3.5V15M15 20.5h5.5V15" />
    </Svg>
  );
}

export function Close(props) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function ChevronLeft(props) {
  return (
    <Svg {...props}>
      <path d="M14.5 5.5 8 12l6.5 6.5" />
    </Svg>
  );
}

export function ChevronRight(props) {
  return (
    <Svg {...props}>
      <path d="M9.5 5.5 16 12l-6.5 6.5" />
    </Svg>
  );
}

export function Film(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.2" />
      <path d="M7 5v14M17 5v14M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4" />
    </Svg>
  );
}

export function Bulb(props) {
  return (
    <Svg {...props}>
      <path d="M9.5 18h5M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.4 10.95c.55.37.9 1 .9 1.65V17h5v-1.4c0-.65.35-1.28.9-1.65A6 6 0 0 0 12 3Z" />
    </Svg>
  );
}

export function Phone(props) {
  return (
    <Svg {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 7 7L16 14.5 20 16v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
    </Svg>
  );
}

export function Mail(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
      <path d="m3.5 7.5 8.5 5.8 8.5-5.8" />
    </Svg>
  );
}

export function Pin(props) {
  return (
    <Svg {...props}>
      <path d="M12 21c4.2-4.1 6.5-7.2 6.5-10.2a6.5 6.5 0 0 0-13 0C5.5 13.8 7.8 16.9 12 21Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </Svg>
  );
}
