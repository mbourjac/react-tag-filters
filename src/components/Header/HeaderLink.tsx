import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type HeaderLinkProps = {
  to: string;
  children: ReactNode;
  end?: boolean;
};

export const HeaderLink = ({ to, end, children }: HeaderLinkProps) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `header-link relative ${isActive ? 'active' : ''}`
      }
    >
      {children}
    </NavLink>
  );
};
