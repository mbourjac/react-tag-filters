import { ProjectCard } from '../../components/ProjectCard';
import type { Project } from './ProjectDetails.types';

type MobileRecommendationProjectsProps = {
  projectSlug: Project['slug'];
  recommendationProjects: Project[];
};

export const MobileRecommendationProjects = ({
  projectSlug,
  recommendationProjects,
}: MobileRecommendationProjectsProps) => {
  return (
    <section
      key={`mobile-recommendations-${projectSlug}`}
      className="max-w-screen flex flex-col gap-8 overflow-x-auto px-4 py-8 text-primary sm:px-8 lg:hidden"
    >
      <p className="text-xl">
        Id eligendi mollitia magni eveniet numquam minima quisquam
      </p>
      <div className="flex gap-8">
        {recommendationProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            {...project}
            coverClassName="h-[20vh] w-auto"
          />
        ))}
      </div>
    </section>
  );
};
