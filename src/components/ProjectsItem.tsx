import { useParams } from 'react-router-dom';
import ProjectData from './ProjectData';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function ProjectItem() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedProject = ProjectData.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col gap-[3rem] py-[5rem] dark:bg-gray-700 dark:text-gray-200 items-center sm:w-[38rem]">
      <div className="flex flex-col gap-[0.5rem] items-center p-[2rem]">
        <div className="flex flex-col items-center gap-[5rem]">
          <div className="flex flex-col items-center">
            <img
              src={selectedProject.logo}
              alt="logo"
              className="w-[20rem] dark:bg-gray-200 dark:rounded-[3rem] p-[1rem]"
            />
          </div>
          <div className="flex flex-col gap-[0.2rem] items-center">
            <div className="flex gap-[1rem]">
              <a href={selectedProject.github}>
                <img
                  className="dark:filter dark:invert dark:brightness-200"
                  src={'/assets/github.svg'}
                  width={20}
                />
              </a>
              <a href={selectedProject.demoLink}>
                <img
                  className="filter invert dark:brightness-200"
                  src={'/assets/link.svg'}
                  width={20}
                />
              </a>
            </div>
            <h1 className="text-2-700">{selectedProject.title}</h1>
            <h2 className="text-1.25-300  text-gray-600 dark:text-gray-200">
              {selectedProject.position}
            </h2>
            <p className="text-0.9-300 text-gray-500 dark:text-gray-400">
              {selectedProject.duration}
            </p>
          </div>
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

      <div className="flex flex-col gap-[5rem] items-center">
        <div className="flex flex-col items-start border-t-[0.2rem] border-b-[0.2rem] p-[2rem] drop-shadow-sm border-orange-200 ">
          <h1 className="text-1.5-500 pb-[2rem] sm:text-1-500">
            {t(`Project-items.title1-learn`)}
          </h1>
          <div className="w-[50rem] flex flex-col gap-[2rem] sm:w-[30rem]">
            <div className="text-1.25-300 text-start sm:text-0.9-300">
              <h2 className="pb-[1rem]">
                {t(`Project-items.${id}.subtitle1-1`)}
              </h2>
              <p className="sm:text-0.7-300">
                {t(`Project-items.${id}.description1-1`)}
              </p>
            </div>
            <div className="text-1.25-300 text-start sm:text-0.9-300">
              <h2 className="pb-[1rem]">
                {t(`Project-items.${id}.subtitle1-2`)}
              </h2>
              <p className="sm:text-0.7-300">
                {t(`Project-items.${id}.description1-2`)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end p-[2rem] sm:p-[1rem]">
          <h1 className="text-1.5-500 pb-[2rem] sm:text-1-500">
            {t(`Project-items.title2-challenges`)}
          </h1>
          <div className="w-[50rem] flex flex-col gap-[2rem] items-end sm:w-[30rem]">
            <div className="text-1.25-300 text-end sm:text-0.9-300">
              <h2 className="pb-[1rem]">
                {t(`Project-items.${id}.subtitle2-1`)}
              </h2>
              <p className="w-[42rem] sm:text-0.7-300 sm:w-[28rem]">
                {t(`Project-items.${id}.description2-1`)}
              </p>
            </div>
            <div className="text-1.25-300 text-end sm:text-0.9-300">
              <h2 className="pb-[1rem]">
                {t(`Project-items.${id}.subtitle2-2`)}
              </h2>
              <p className="w-[42rem] sm:text-0.7-300 sm:w-[28rem]">
                {t(`Project-items.${id}.description2-2`)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start p-[2rem] sm:p-[1rem]">
          <h1 className="text-1.5-500 pb-[2rem] sm:text-1-500">
            {t(`Project-items.title3-solution`)}
          </h1>
          <div className="w-[50rem] flex flex-col gap-[2rem] sm:w-[30rem]">
            <div className="text-1.25-300 text-start sm:text-0.9-300">
              <h2 className="pb-[1rem]">
                {t(`Project-items.${id}.subtitle3-1`)}
              </h2>
              <p className="w-[42rem] sm:text-0.7-300 sm:w-[28rem]">
                {t(`Project-items.${id}.description3-1`)}
              </p>
            </div>
            <div className="text-1.25-300 text-start sm:text-0.9-300">
              <h2 className="pb-[1rem]">
                {t(`Project-items.${id}.subtitle3-2`)}
              </h2>
              <p className="w-[42rem] sm:text-0.7-300 sm:w-[28rem]">
                {t(`Project-items.${id}.description3-2`)}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50rem] flex flex-col gap-[2rem] items-center text-1.25-300 p-[2rem] sm:p-[1rem] sm:w-[30rem]">
          <h1 className="text-1.5-500  sm:text-1-500">
            {t(`Project-items.title4-result`)}
          </h1>
          <p className="text-center w-[45rem] sm:text-0.7-300 sm:w-[30rem]">
            {t(`Project-items.${id}.description4-1`)}
          </p>
        </div>
      </div>

      <button
        className="hover:bg-gray-300 p-[0.7rem] rounded-[1rem] text-gray-700 bg-gray-200 dark:hover:bg-gray-300 hover:drop-shadow-md"
        onClick={() => {
          navigate('/projects');
        }}
      >
        ← {t(`back-button`)}
      </button>
    </div>
  );
}
