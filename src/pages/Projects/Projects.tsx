import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { RadioButton } from '../../components/RadioButton';
import { cn } from '../../lib/tailwind';
import { projects, tags } from './Projects.constants';
import { TagsTypeButton } from './TagFilters/TagsTypeButton';

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
    <div className="flex flex-col gap-12 px-8 py-12">
      <h1 className="text-4xl font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <div className="flex flex-col gap-6">
        <form>
          <input
            type="search"
            placeholder="Search"
            aria-label="Search project"
            className="search-input w-full rounded-full border border-body bg-off-white py-2 pl-12 pr-6 placeholder:text-body placeholder:opacity-50 md:w-2/3 lg:w-1/2"
          />
        </form>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          voluptates fuga molestiae eligendi voluptas eius nisi provident,
          maiores impedit, optio nesciunt odit, possimus velit placeat
          consectetur alias ipsam repellendus temporibus.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link to="." className="button hover:bg-secondary-light">
            All projects
          </Link>
          <fieldset className="flex flex-wrap gap-2">
            <legend className="sr-only">Select the tags type:</legend>
            {tags.map(({ type: { value, label } }) => (
              <TagsTypeButton
                key={value}
                value={value}
                handleTagsTypeChange={handleTagsTypeChange}
                selectedTagsType={selectedTagsType}
              >
                {label}
              </TagsTypeButton>
            ))}
          </fieldset>
          {tags.map(({ type, items }) => {
            return (
              selectedTagsType === type.value &&
              items.map(([value, label]) => {
                const isSelected = selectedTag === value;

                return (
                  <RadioButton<string>
                    key={value}
                    name={type.value}
                    value={value}
                    isChecked={isSelected}
                    className={cn(
                      'border-secondary text-secondary  hover:bg-tertiary-light',
                      isSelected && 'bg-tertiary-light',
                    )}
                    handleChange={handleTagChange}
                  >
                    {label}
                  </RadioButton>
                );
              })
            );
          })}
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedProjects.map(({ title, slug, tags: projectTags }) => (
          <article key={slug} className="flex flex-col gap-2">
            <Link to={slug}>
              <div className="aspect-video w-full bg-body"></div>
            </Link>
            <h2 className="truncate">{title}</h2>
            <ul className="flex flex-wrap gap-2 text-xs">
              {projectTags.map(({ value, label }) => (
                <li
                  key={value}
                  className="rounded-full border border-body px-2 py-1"
                >
                  {label}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};
