import type { ReactNode } from '@tanstack/react-router';
import { MainHeading } from '../components/MainHeading';

type NotFoundProps = {
  children?: ReactNode;
};

export const NotFound = ({
  children = 'Nothing to see here',
}: NotFoundProps) => {
  return (
    <div className="px-4 py-12 sm:px-8">
      <MainHeading>{children}</MainHeading>
    </div>
  );
};
