import { Outlet, ScrollRestoration } from '@tanstack/react-router';
import { Header } from '../components/Header/Header';

export const AppLayout = () => {
  return (
    <>
      <ScrollRestoration getKey={(location) => location.pathname} />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
