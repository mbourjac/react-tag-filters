import { useParams } from 'react-router-dom';
import { useRecommendationProjects } from '../../hooks/use-recommendation-projects';
import { NotFound } from '../NotFound';
import { projects } from '../Projects/Projects.constants';
import { DesktopRecommendationsProjects } from './DesktopRecommendationsProjects';
import { MobileRecommendationProjects } from './MobileRecommendationProjects';
import { ProjectDescription } from './ProjectDescription';
import { ProjectHero } from './ProjectHero';

export const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);
  const recommendationProjects = useRecommendationProjects(project);

  if (!project) {
    return <NotFound />;
  }

  const { slug: projectSlug, title, tags } = project;

  return (
    <>
      <DesktopRecommendationsProjects
        projectSlug={projectSlug}
        recommendationProjects={recommendationProjects}
      />
      <div className="flex flex-col gap-[2px] p-[2px] text-off-white lg:w-[70vw]">
        <ProjectHero title={title} tags={tags} />
        <MobileRecommendationProjects
          projectSlug={projectSlug}
          recommendationProjects={recommendationProjects}
        />
        <ProjectDescription />
      </div>
    </>
  );
};
