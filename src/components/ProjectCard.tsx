import { Link } from 'react-router-dom';
import type { Project } from '../pages/ProjectDetails/ProjectDetails.types';

type ProjectCardProps = Project;

export const ProjectCard = ({ slug, title, tags }: ProjectCardProps) => {
  return (
    <article key={slug} className="flex flex-col gap-2">
      <Link to={`/projects/${slug}`}>
        <div className="aspect-video w-full bg-body"></div>
      </Link>
      <h2 className="truncate">{title}</h2>
      <ul className="flex flex-wrap gap-2 text-xs">
        {tags.map(({ value, label }) => (
          <li key={value} className="rounded-full border border-body px-2 py-1">
            {label}
          </li>
        ))}
      </ul>
    </article>
  );
};