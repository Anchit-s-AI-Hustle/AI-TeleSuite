
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="40"
      height="40"
      aria-label="AI TeleSuite Logo"
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="12%" y1="4%" x2="92%" y2="96%">
          <stop offset="0%" style={{ stopColor: '#49d8ff', stopOpacity: 1 }} />
          <stop offset="54%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8cf7c8', stopOpacity: 1 }} />
        </linearGradient>
        <radialGradient id="logoGlow" cx="30%" cy="18%" r="80%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.34 }} />
          <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      <rect x="7" y="7" width="86" height="86" rx="24" fill="#06111f" />
      <rect x="9" y="9" width="82" height="82" rx="22" fill="url(#logoGradient)" opacity="0.92" />
      <rect x="9" y="9" width="82" height="82" rx="22" fill="url(#logoGlow)" />
      <path d="M27 60 C34 46 37 38 45 38 H57 C65 38 69 46 76 60" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="7" strokeLinecap="round" />
      <path d="M32 67 C40 62 48 60 58 62 C64 63 69 66 74 69" fill="none" stroke="#8cf7c8" strokeWidth="4" strokeLinecap="round" opacity="0.95" />
      <path d="M29 32 L38 45 L47 32" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M57 32 H73 M65 32 V53" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
