import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';

type HeaderLinkProps = {
  to: string;
  children: ReactNode;
};

export const HeaderLink = ({ to, children }: HeaderLinkProps) => {
  return (
    <Link
      to={to}
      className="header-link relative"
      activeProps={{
        className: 'active',
      }}
    >
      {children}
    </Link>
  );
};
