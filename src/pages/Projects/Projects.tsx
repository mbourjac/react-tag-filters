import { useMemo } from 'react';
import { getRouteApi } from '@tanstack/react-router';
import { MainHeading } from '../../components/MainHeading';
import { projects } from './Projects.constants';
import { ProjectSearch } from './ProjectsFilters/ProjectSearch';
import { TagFilters } from './ProjectsFilters/TagFilters';
import { ProjectsList } from './ProjectsList';

const route = getRouteApi('/projects');

export const Projects = () => {
  const searchParams = route.useSearch();

  const displayedProjects = useMemo(
    () =>
      searchParams.tag ?
        projects.filter(({ tags }) =>
          tags.find(({ value }) => value === searchParams.tag),
        )
      : projects,
    [searchParams],
  );

  return (
    <div className="flex flex-col gap-12 px-4 py-12 sm:px-8">
      <MainHeading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </MainHeading>
      <div className="flex flex-col gap-6">
        <ProjectSearch />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          voluptates fuga molestiae eligendi voluptas eius nisi provident,
          maiores impedit, optio nesciunt odit, possimus velit placeat
          consectetur alias ipsam repellendus temporibus.
        </p>
        <TagFilters
          selectedTagsType={searchParams.type ?? 'category'}
          selectedTag={searchParams.tag}
        />
      </div>
      <ProjectsList projects={displayedProjects} />
    </div>
  );
};
