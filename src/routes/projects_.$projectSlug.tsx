import { createFileRoute } from '@tanstack/react-router';
import { ProjectDetails } from '../pages/ProjectDetails/ProjectDetails';

export const Route = createFileRoute('/projects/$projectSlug')({
  component: ProjectDetails,
});
