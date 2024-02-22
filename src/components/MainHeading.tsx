import type { ReactNode } from 'react';

type MainHeadingProps = {
  children: ReactNode;
};

export const MainHeading = ({ children }: MainHeadingProps) => {
  return <h1 className="text-4xl font-medium">{children}</h1>;
};
