import { ProjectCard } from '../../components/ProjectCard';
import type { Project } from '../ProjectDetails/ProjectDetails.types';

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
};
