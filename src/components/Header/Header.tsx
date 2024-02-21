import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { HeaderLink } from './HeaderLink';

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[4.625rem] w-full items-center justify-between border-b border-body-light bg-off-white px-8 py-4">
      <Link to="/">
        <Logo ariaHidden className="aspect-square w-10" />
        <span className="sr-only">Home</span>
      </Link>
      <nav className="flex gap-16 font-medium">
        <HeaderLink to={'projects'} end>
          Projects
        </HeaderLink>
        <HeaderLink to={'about'}>About</HeaderLink>
        <HeaderLink to={'blog'}>Blog</HeaderLink>
      </nav>
    </header>
  );
};
