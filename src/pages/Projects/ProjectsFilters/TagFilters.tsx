import { Link } from 'react-router-dom';
import { RadioButton } from '../../../components/RadioButton';
import { useProjectsTags } from '../../../hooks/use-projects-tags';
import { cn } from '../../../lib/tailwind';
import { projects, tagTypes } from '../Projects.constants';
import { TagsTypeButton } from './TagsTypeButton';

type TagFiltersProps = {
  selectedTagsType: string;
  selectedTag: string | null;
  handleTagsTypeChange: (value: string) => void;
  handleTagChange: (value: string) => void;
};

export const TagFilters = ({
  selectedTagsType,
  selectedTag,
  handleTagsTypeChange,
  handleTagChange,
}: TagFiltersProps) => {
  const { getAllUniqueTags } = useProjectsTags();
  const tags = getAllUniqueTags(tagTypes, projects);

  return (
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
          items.map(({ value, label }) => {
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
  );
};
