import type { ReactNode } from 'react';
import { cn } from '../lib/tailwind';

type RadioButtonProps<T extends string> = {
  name: string;
  value: T;
  className?: string;
  isChecked: boolean;
  handleChange: (value: T) => Promise<void>;
  children: ReactNode;
};

export const RadioButton = <T extends string>({
  name,
  value,
  className,
  isChecked,
  handleChange,
  children,
}: RadioButtonProps<T>) => {
  return (
    <div>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        className="hidden"
        onChange={() => void handleChange(value)}
        checked={isChecked}
      />
      <label
        htmlFor={value}
        className={cn('button inline-block cursor-pointer border', className)}
      >
        {children}
      </label>
    </div>
  );
};
