import { createFileRoute, notFound } from '@tanstack/react-router';
import { NotFound } from '../pages/NotFound';
import { ProjectDetails } from '../pages/ProjectDetails/ProjectDetails';
import type { Project } from '../pages/ProjectDetails/ProjectDetails.types';
import { projects } from '../pages/Projects/Projects.constants';

export const Route = createFileRoute('/projects/$projectSlug')({
  component: ProjectDetails,
  notFoundComponent: () => <NotFound>No project found</NotFound>,
  loader: async ({ params: { projectSlug } }) => {
    const project = await new Promise<Project | undefined>((resolve) =>
      resolve(projects.find((project) => project.slug === projectSlug)),
    );

    if (!project) throw notFound();

    return { project };
  },
});
