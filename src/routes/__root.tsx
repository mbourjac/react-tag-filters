import { createRootRoute } from '@tanstack/react-router';
import { AppLayout } from '../layouts/AppLayout';
import { NotFound } from '../pages/NotFound';

export const Route = createRootRoute({
  component: AppLayout,
  notFoundComponent: () => <NotFound />,
});
