import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainHeading } from '../../components/MainHeading';
import { projects } from './Projects.constants';
import { ProjectSearch } from './ProjectsFilters/ProjectSearch';
import { TagFilters } from './ProjectsFilters/TagFilters';
import { ProjectsList } from './ProjectsList';

export const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTagsType = searchParams.get('type') ?? 'category';
  const selectedTag = searchParams.get('tag');

  const displayedProjects = useMemo(
    () =>
      selectedTag ?
        projects.filter(({ tags }) =>
          tags.find(({ value }) => value === selectedTag),
        )
      : projects,
    [selectedTag],
  );

  const handleTagsTypeChange = (value: string) => {
    setSearchParams((searchParams) => {
      searchParams.set('type', value);
      return searchParams;
    });
  };

  const handleTagChange = (value: string) => {
    setSearchParams((searchParams) => {
      searchParams.set('tag', value);
      return searchParams;
    });
  };

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
          selectedTagsType={selectedTagsType}
          selectedTag={selectedTag}
          handleTagsTypeChange={handleTagsTypeChange}
          handleTagChange={handleTagChange}
        />
      </div>
      <ProjectsList projects={displayedProjects} />
    </div>
  );
};
