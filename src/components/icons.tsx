import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Ramdev Emporium Logo</title>
      <path d="M4 4h16v16H4z" fill="currentColor" opacity="0.1" />
      <path d="M9 17V7h4a4 4 0 0 1 0 8H9" />
      <line x1="13" y1="11" x2="17" y2="15" />
    </svg>
  );
}
