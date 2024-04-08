import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { Projects } from '../pages/Projects/Projects';

const projectSearchSchema = z.object({
  type: z.string().optional(),
  tag: z.string().optional(),
});

export const Route = createFileRoute('/projects')({
  component: Projects,
  validateSearch: projectSearchSchema,
});
