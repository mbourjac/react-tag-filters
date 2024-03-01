import { ProjectCard } from '../../components/ProjectCard';
import type { Project } from './ProjectDetails.types';

type DesktopRecommendationsProjectsProps = {
  projectSlug: Project['slug'];
  recommendationProjects: Project[];
};

export const DesktopRecommendationsProjects = ({
  projectSlug,
  recommendationProjects,
}: DesktopRecommendationsProjectsProps) => {
  return (
    <aside
      key={`desktop-recommendations-${projectSlug}`}
      className="fixed right-0 top-[4.625rem] hidden h-[calc(100vh-4.625rem)] w-[30vw] flex-col gap-8 overflow-y-auto px-8 py-12 lg:flex"
    >
      <p className="text-xl">
        Id eligendi mollitia magni eveniet numquam minima quisquam
      </p>
      {recommendationProjects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </aside>
  );
};
