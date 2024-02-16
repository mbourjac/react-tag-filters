import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from '../components/Header/Header';

export const AppLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
