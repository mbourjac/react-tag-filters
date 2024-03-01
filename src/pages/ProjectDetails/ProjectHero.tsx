import { Link } from 'react-router-dom';
import type { Project } from './ProjectDetails.types';

type ProjectHeroProps = {
  title: Project['title'];
  tags: Project['tags'];
};

export const ProjectHero = ({ title, tags }: ProjectHeroProps) => {
  return (
    <section className="flex flex-col gap-8 rounded-[48px] bg-body px-4 py-12 sm:px-8">
      <div className="aspect-video w-full bg-off-white"></div>
      <div className="flex flex-col gap-8">
        <ul className="flex flex-wrap gap-4 text-2xl">
          {tags.map(({ type, value, label }) => (
            <li key={value}>
              <Link
                to={`..?type=${type}&tag=${value}`}
                relative="path"
                className="rounded-full border border-off-white px-4 py-1 duration-300 ease-in-out [transition-property:all] hover:border-tertiary-light hover:bg-tertiary-light hover:text-body"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <h1 className="text-4xl font-medium">{title}</h1>
      </div>
    </section>
  );
};
