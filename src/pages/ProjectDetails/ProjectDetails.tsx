import { getRouteApi } from '@tanstack/react-router';
import { useRecommendationProjects } from '../../hooks/use-recommendation-projects';
import { NotFound } from '../NotFound';
import { projects } from '../Projects/Projects.constants';
import { DesktopRecommendationsProjects } from './DesktopRecommendationsProjects';
import { MobileRecommendationProjects } from './MobileRecommendationProjects';
import { ProjectDescription } from './ProjectDescription';
import { ProjectHero } from './ProjectHero';

const route = getRouteApi('/projects/$projectSlug');

export const ProjectDetails = () => {
  const { projectSlug } = route.useParams();
  const project = projects.find((project) => project.slug === projectSlug);
  const recommendationProjects = useRecommendationProjects(project);

  if (!project) {
    return <NotFound />;
  }

  const { slug, title, tags } = project;

  return (
    <>
      <DesktopRecommendationsProjects
        projectSlug={slug}
        recommendationProjects={recommendationProjects}
      />
      <div className="flex flex-col gap-[2px] p-[2px] text-off-white lg:w-[70vw]">
        <ProjectHero title={title} tags={tags} />
        <MobileRecommendationProjects
          projectSlug={slug}
          recommendationProjects={recommendationProjects}
        />
        <ProjectDescription />
      </div>
    </>
  );
};
