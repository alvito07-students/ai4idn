import type { ReactNode } from "react";

type IconProps = { children: ReactNode };

function IconFrame({ children }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

export function ChatIcon() {
  return (
    <IconFrame>
      <path d="M7 18.5 3.5 20l1.1-3.7A8 8 0 1 1 7 18.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 10h8M8 13.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconFrame>
  );
}

export function BriefcaseIcon() {
  return (
    <IconFrame>
      <path d="M4 8.5h16v10H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 8.5V6h6v2.5M4 12.5c4.8 2 11.2 2 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </IconFrame>
  );
}

export function ShieldIcon() {
  return (
    <IconFrame>
      <path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </IconFrame>
  );
}

export function HeartIcon() {
  return (
    <IconFrame>
      <path d="M20 8.7C20 14 12 19 12 19S4 14 4 8.7C4 5.7 7.7 4 10 6.5L12 8.7l2-2.2C16.3 4 20 5.7 20 8.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </IconFrame>
  );
}

export function LockIcon() {
  return (
    <IconFrame>
      <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconFrame>
  );
}

export function UsersIcon() {
  return (
    <IconFrame>
      <path d="M16 20v-1.5a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4V20M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 11a3 3 0 0 0 0-6M18 14.5a4 4 0 0 1 2 3.5v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </IconFrame>
  );
}

export function SparkIcon() {
  return (
    <IconFrame>
      <path d="M12 3c.7 4 2 5.3 6 6-4 .7-5.3 2-6 6-.7-4-2-5.3-6-6 4-.7 5.3-2 6-6ZM19 15c.3 1.8.9 2.4 2.7 2.7-1.8.3-2.4.9-2.7 2.7-.3-1.8-.9-2.4-2.7-2.7 1.8-.3 2.4-.9 2.7-2.7Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </IconFrame>
  );
}
