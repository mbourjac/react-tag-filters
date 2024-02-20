import type { ReactNode } from 'react';
import { RadioButton } from '../../../components/RadioButton';
import { cn } from '../../../lib/tailwind';

type TagsTypeButtonProps = {
  value: string;
  selectedTagsType: string;
  handleTagsTypeChange: (value: string) => void;
  children: ReactNode;
};

export const TagsTypeButton = ({
  value,
  selectedTagsType,
  handleTagsTypeChange,
  children,
}: TagsTypeButtonProps) => {
  const isSelected = selectedTagsType === value;

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
      handleChange={() => handleTagsTypeChange(value)}
    >
      {children}
    </RadioButton>
  );
};
