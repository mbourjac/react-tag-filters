import { useCallback } from 'react';
import type {
  Project,
  ProjectTag,
  TagType,
} from '../pages/ProjectDetails/ProjectDetails.types';

export const useProjectsTags = () => {
  const getAllUniqueTagsByType = useCallback(
    (type: string, projects: Project[]) => {
      return projects.reduce<ProjectTag[]>(
        (uniqueTagsAccumulator, { tags }) => {
          tags.forEach((tag) => {
            if (
              tag.type === type &&
              uniqueTagsAccumulator.every(
                (existingTag) => existingTag.value !== tag.value,
              )
            ) {
              uniqueTagsAccumulator.push(tag);
            }
          });

          return uniqueTagsAccumulator;
        },
        [],
      );
    },
    [],
  );

  const getAllUniqueTags = useCallback(
    (tagTypes: TagType[], projects: Project[]) => {
      const tags = tagTypes.map(({ value, label }) => ({
        type: { value, label },
        items: getAllUniqueTagsByType(value, projects),
      }));

      return tags;
    },
    [getAllUniqueTagsByType],
  );

  return { getAllUniqueTags };
};
