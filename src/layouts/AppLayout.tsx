import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from '../components/Header';

export const AppLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </>
  );
};
