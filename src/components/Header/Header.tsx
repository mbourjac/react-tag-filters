import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { HeaderLink } from './HeaderLink';

export const Header = () => {
  return (
    <header className="border-body-light bg-off-white sticky top-0 flex w-full items-center justify-between border-b px-8 py-4">
      <Link to="/">
        <Logo ariaHidden className="aspect-square w-10" />
        <span className="sr-only">Home</span>
      </Link>
      <nav className="flex gap-16 font-medium">
        <HeaderLink to={'projects'}>Projects</HeaderLink>
        <HeaderLink to={'about'}>About</HeaderLink>
        <HeaderLink to={'blog'}>Blog</HeaderLink>
      </nav>
    </header>
  );
};
