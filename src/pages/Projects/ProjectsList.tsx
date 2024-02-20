import { Link } from 'react-router-dom';
import type { Project } from '../ProjectDetails/ProjectDetails.types';

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map(({ title, slug, tags }) => (
        <article key={slug} className="flex flex-col gap-2">
          <Link to={slug}>
            <div className="aspect-video w-full bg-body"></div>
          </Link>
          <h2 className="truncate">{title}</h2>
          <ul className="flex flex-wrap gap-2 text-xs">
            {tags.map(({ value, label }) => (
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
  );
};
