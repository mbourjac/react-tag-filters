import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails/ProjectDetails';
import { Projects } from './pages/Projects/Projects';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:slug" element={<ProjectDetails />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
    </Route>,
  ),
);

export const App = () => {
  return <RouterProvider router={router} />;
};
