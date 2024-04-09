import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import type { AllRoutes } from '../../lib/tanstack-router';

type HeaderLinkProps = {
  to: AllRoutes;
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
