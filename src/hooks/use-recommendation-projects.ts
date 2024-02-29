import { shuffleArray } from '../helpers/arrays';
import type { Project } from '../pages/ProjectDetails/ProjectDetails.types';
import { projects } from '../pages/Projects/Projects.constants';

export const useRecommendationProjects = (project?: Project) => {
  if (!project) return;

  const { slug, tags } = project;
  const asideProjectsMap = new Map<string, Project>();

  tags.forEach(({ type, value }) => {
    const matchingProjects = projects.filter(
      (project) =>
        project.slug !== slug &&
        project.tags.some((tag) => tag.type === type && tag.value === value),
    );

    if (matchingProjects.length > 0) {
      const shuffledProjects = shuffleArray(matchingProjects);

      for (let i = 0; i < shuffledProjects.length - 1; i++) {
        const randomAsideProject = shuffledProjects[i]!;

        if (!asideProjectsMap.has(randomAsideProject.slug)) {
          asideProjectsMap.set(randomAsideProject.slug, randomAsideProject);
          break;
        }
      }
    }
  });

  return Array.from(asideProjectsMap.values());
};
