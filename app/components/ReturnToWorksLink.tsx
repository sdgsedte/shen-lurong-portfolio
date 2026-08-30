'use client';

import type { ReactNode } from 'react';

type ReturnToWorksLinkProps = {
  children: ReactNode;
  className?: string;
};

export default function ReturnToWorksLink({ children, className }: ReturnToWorksLinkProps) {
  const rememberFastReturn = () => {
    try {
      window.sessionStorage.setItem('portfolio-return-to-works', '1');
      window.setTimeout(() => window.sessionStorage.removeItem('portfolio-return-to-works'), 4000);
    } catch {
      // The native link still navigates when storage is unavailable.
    }
  };

  return (
    <a
      className={className}
      href="/#works"
      onClick={rememberFastReturn}
    >
      {children}
    </a>
  );
}
