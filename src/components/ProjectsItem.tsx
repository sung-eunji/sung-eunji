import { useParams } from 'react-router-dom';
import ProjectData from './ProjectData';

export default function ProjectItem() {
  const { id } = useParams();

  const selectedProject = ProjectData.find((item) => item.id === Number(id));

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col gap-[1rem] py-[10rem] dark:bg-gray-700 dark:text-gray-200 items-center ">
      <div>
        <h1 className="text-2-700">{selectedProject.title}</h1>
        <h2 className="text-1.25-300  text-gray-600">
          {selectedProject.position}
        </h2>
        <p className="text-1-300 text-gray-500">{selectedProject.duration}</p>
      </div>

      <ul className="flex gap-[1rem] text-0.7-300">
        {selectedProject.stacks.map((stack, index) => (
          <li className="bg-orange-300 rounded-[2rem] p-[0.5rem]" key={index}>
            {stack}
          </li>
        ))}
      </ul>
    </div>
  );
}
