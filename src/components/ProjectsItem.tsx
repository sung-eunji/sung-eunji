import { useParams } from 'react-router-dom';
import ProjectData from './ProjectData';
import { useNavigate } from 'react-router-dom';

export default function ProjectItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedProject = ProjectData.find((item) => item.id === Number(id));

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col gap-[3rem] py-[10rem] dark:bg-gray-700 dark:text-gray-200 items-center ">
      <div className="flex flex-col gap-[0.5rem]">
        <div>
          <h1 className="text-2-700">{selectedProject.title}</h1>
          <h2 className="text-1.25-300  text-gray-600 dark:text-gray-200">
            {selectedProject.position}
          </h2>
          <p className="text-1-300 text-gray-500 dark:text-gray-400">
            {selectedProject.duration}
          </p>
        </div>
        <ul className="flex gap-[1rem] text-0.7-300">
          {selectedProject.stacks.map((stack, index) => (
            <li
              className="bg-orange-300 dark:text-gray-600 rounded-[1rem] p-[0.3rem]"
              key={index}
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div>
          <h1>problem1</h1>
          <p>solve1</p>
        </div>
        <div>
          <h1>problem2</h1>
          <p>solve2</p>
        </div>
      </div>

      <button
        className="hover:bg-gray-200 p-[0.4rem] rounded-[1rem]"
        onClick={() => {
          navigate('/projects');
        }}
      >
        ← 돌아가기
      </button>
    </div>
  );
}
