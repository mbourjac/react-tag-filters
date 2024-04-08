import type { ReactNode } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { RadioButton } from '../../../components/RadioButton';
import { cn } from '../../../lib/tailwind';

type TagsTypeButtonProps = {
  value: string;
  selectedTagsType: string;
  children: ReactNode;
};

export const TagsTypeButton = ({
  value,
  selectedTagsType,
  children,
}: TagsTypeButtonProps) => {
  const navigate = useNavigate({ from: '/projects' });
  const isSelected = selectedTagsType === value;

  const handleTagsTypeChange = async (value: string) => {
    await navigate({
      search: (prev) => ({
        ...prev,
        type: value,
      }),
    });
  };

  return (
    <RadioButton<string>
      name="tags-type"
      value={value}
      isChecked={isSelected}
      className={cn(
        'border-primary bg-primary text-off-white',
        !isSelected &&
          'opacity-50 hover:opacity-100 [&:not(:hover)]:border-secondary [&:not(:hover)]:bg-secondary',
      )}
      handleChange={handleTagsTypeChange}
    >
      {children}
    </RadioButton>
  );
};
