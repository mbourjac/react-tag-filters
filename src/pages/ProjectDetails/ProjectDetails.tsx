import { Link, useParams } from 'react-router-dom';
import { NotFound } from '../NotFound';
import { projects } from '../Projects/Projects.constants';

export const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const { title, tags } = project;

  return (
    <>
      <div className="flex flex-col gap-[2px] p-[2px] text-off-white">
        <div className="flex flex-col gap-8 rounded-[48px] bg-body px-8 py-12">
          <div className="aspect-video w-full bg-off-white"></div>
          <div className="flex flex-col gap-8">
            <ul className="flex gap-4 text-2xl">
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
        <div className="flex flex-col gap-12 rounded-[48px] bg-body px-8 py-12 text-2xl">
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
