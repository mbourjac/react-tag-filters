import { Link, useParams } from 'react-router-dom';
import { ProjectCard } from '../../components/ProjectCard';
import { useRecommendationProjects } from '../../hooks/use-recommendation-projects';
import { NotFound } from '../NotFound';
import { projects } from '../Projects/Projects.constants';

export const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);
  const recommendationProjects = useRecommendationProjects(project);

  if (!project) {
    return <NotFound />;
  }

  const { title, tags } = project;

  return (
    <>
      <aside
        key={`desktop-recommendations-${slug}`}
        className="fixed right-0 top-[4.625rem] hidden h-[calc(100vh-4.625rem)] w-[30vw] flex-col gap-8 overflow-y-auto px-8 py-12 lg:flex"
      >
        <p className="text-xl">
          Id eligendi mollitia magni eveniet numquam minima quisquam
        </p>
        {recommendationProjects?.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </aside>
      <div className="flex flex-col gap-[2px] p-[2px] text-off-white lg:w-[70vw]">
        <div className="flex flex-col gap-8 rounded-[48px] bg-body px-4 py-12 sm:px-8">
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
        </div>
        <div
          key={`mobile-recommendations-${slug}`}
          className="max-w-screen flex flex-col gap-8 overflow-x-auto px-4 py-8 text-primary sm:px-8 lg:hidden"
        >
          <p className="text-xl">
            Id eligendi mollitia magni eveniet numquam minima quisquam
          </p>
          <div className="flex gap-8">
            {recommendationProjects?.map((project) => (
              <ProjectCard
                key={project.slug}
                {...project}
                coverClassName="h-[20vh] w-auto"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-12 rounded-[48px] bg-body px-4 py-12 text-2xl sm:px-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            quibusdam neque, ducimus non consequuntur necessitatibus. Omnis
            magnam iusto at, doloremque accusamus a esse officiis nihil libero
            fugiat vitae. Tempora, mollitia. Velit consectetur ipsum accusantium
            corrupti nihil enim eos nesciunt, hic iste neque dolorum eaque
            similique a eum assumenda soluta, aliquid expedita nam quidem, sequi
            placeat corporis?
          </p>
          <p>
            Voluptas, fugit? Voluptatem, voluptate! Quas eligendi reiciendis
            quisquam voluptatem mollitia a numquam aperiam cum maxime dicta
            illum, voluptatum optio ea id, odit iure. Nisi rem modi dolore non
            dolores quaerat quibusdam molestias vitae tenetur. Neque, nemo sed
            facilis voluptates cum animi dignissimos laudantium excepturi saepe
            quas consectetur.
          </p>
          <p>
            Excepturi nam fugit omnis eius sint sapiente repellendus, laudantium
            quibusdam, illo vero facilis tempore praesentium laborum doloremque.
            Voluptatibus nam asperiores porro quas obcaecati perferendis
            similique eveniet animi sint commodi, at modi debitis cumque vitae
            natus? Dolorem saepe voluptatibus modi perspiciatis asperiores
            tempora porro vel eveniet natus inventore.
          </p>
        </div>
      </div>
    </>
  );
};
