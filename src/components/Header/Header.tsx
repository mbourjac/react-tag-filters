import { Link } from '@tanstack/react-router';
import { Logo } from '../Logo';
import { HeaderLink } from './HeaderLink';

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[4.625rem] w-full items-center justify-between border-b border-body-light bg-off-white px-4 py-4 sm:px-8">
      <Link to="/">
        <Logo ariaHidden className="aspect-square w-10" />
        <span className="sr-only">Home</span>
      </Link>
      <nav className="flex gap-8 font-medium sm:gap-16">
        <HeaderLink to="/projects">Projects</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
        <HeaderLink to="/blog">Blog</HeaderLink>
      </nav>
    </header>
  );
};
