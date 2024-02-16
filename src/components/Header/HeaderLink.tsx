import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type HeaderLinkProps = {
  to: string;
  children: ReactNode;
};

export const HeaderLink = ({ to, children }: HeaderLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `header-link relative ${isActive ? 'active' : ''}`
      }
    >
      {children}
    </NavLink>
  );
};
