// Lightweight inline icon set (stroke-based, inherits currentColor)
const paths = {
  fire: (
    <path d="M12 3c1 3-2 4-2 7a3 3 0 0 0 6 0c0-1-1-2-1-3 2 1 4 3 4 6a7 7 0 1 1-14 0c0-4 4-5 7-10z" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16Z" />
      <path d="M9 17c2-4 5-6 9-7" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12.5a10 10 0 0 1 14 0" />
      <path d="M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19" r="0.6" fill="currentColor" />
    </>
  ),
  bonfire: (
    <>
      <path d="M12 3c1.2 2.5-1.5 3.5-1.5 6A2.5 2.5 0 0 0 15 9c0-.8-.6-1.5-.6-2.3 1.5.8 3.1 2.5 3.1 5A5.5 5.5 0 1 1 9 7c1.5-1.3 3-2 3-4z" />
      <path d="M4 21l16-7M20 21 4 14" />
    </>
  ),
  spa: (
    <>
      <path d="M12 21c-3-3-6-4-6-8 0-1 0-2 1-3 2 1 4 3 5 6 1-3 3-5 5-6 1 1 1 2 1 3 0 4-3 5-6 8Z" />
      <path d="M12 21v-6" />
    </>
  ),
  star: <path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.8z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  pin: (
    <>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="m5 12 5 5 9-11" />,
  bed: (
    <>
      <path d="M3 18V7M21 18v-7H3M3 12h18" />
      <path d="M7 11V9h4v2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-3-5" />
    </>
  ),
  ruler: (
    <>
      <rect x="3" y="8" width="18" height="8" rx="1.5" />
      <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
    </>
  ),
  quote: (
    <path d="M7 7H4v6h3v4H3M20 7h-3v6h3v4h-4" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  mountain: <path d="m3 19 6-11 4 6 2-3 6 8z" />,
}

export default function Icon({ name, size = 22, stroke = 1.7, className = '', style }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  )
}
