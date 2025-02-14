import { useParams } from 'react-router-dom';
//import WorkData from '../data/WorkData';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import FitculatorWorkCardListData from '../data/FitculatorWorkCardListData';

interface ProjectSection {
  title?: string;
  description: string;
  bullets?: string[];
}

export default function ProjectsinWork() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedWork = FitculatorWorkCardListData.find(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!selectedWork) {
    return <div>Item not found</div>;
  }

  // renderProjectSection 함수를 수정합니다
  const renderProjectSection = (sectionKey: string, title?: string) => {
    const section = t(`Work-items.Fitculator.${id}.${sectionKey}`, {
      returnObjects: true,
    }) as ProjectSection;

    if (!section) return null;

    return (
      <div className="text-1.25-300 text-start sm:text-0.8-400 md:px-[2rem]">
        <h2 className="pb-[1rem] text-1.25-500">{title || section.title}</h2>
        <p className="sm:text-0.7-300">{section.description}</p>
        {section.bullets && (
          <ul className="list-disc pl-6 mt-4 space-y-2">
            {section.bullets.map((bullet, index) => (
              <li key={index} className="sm:text-0.7-300">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[3rem] items-center py-[5rem] sm:pt-[3rem] sm:pb-[6.5rem] sm:gap-[5rem]">
      <div className="flex flex-col gap-[0.5rem] items-center py-[2rem]">
        <div className="flex flex-col items-center gap-[5rem] sm:gap-0">
          <div className="flex flex-col items-center">
            <img
              src={selectedWork.logo}
              alt="logo"
              className="w-[20rem] dark:bg-gray-200 dark:rounded-[3rem] p-[1rem] sm:w-[15rem]"
            />
          </div>
          <div className="flex flex-col gap-[0.2rem] items-center">
            <div className="flex gap-[1rem]">
              <a href={selectedWork.github}>
                <img
                  className="dark:filter dark:invert dark:brightness-200"
                  src={'/assets/github.svg'}
                  width={20}
                />
              </a>
              <a href={selectedWork.demoLink}>
                <img
                  className="filter dark:brightness-200 dark:invert"
                  src={'/assets/link.svg'}
                  width={20}
                />
              </a>
            </div>
            <h1 className="text-2-700 sm:text-1.5-700">{selectedWork.title}</h1>
            <h2 className="text-1.25-300  text-gray-600 dark:text-gray-200 sm:text-1-300">
              {selectedWork.position}
            </h2>
            <p className="text-0.9-300 text-gray-500 dark:text-gray-400 sm:text-0.7-300">
              {selectedWork.duration}
            </p>
          </div>
        </div>
        <ul className="flex gap-[1rem] text-0.7-300 sm:text-0.5-500 pb-[2rem]">
          {selectedWork.stacks.map((stack, index) => (
            <li
              className="bg-orange-300 dark:text-gray-600 rounded-[1rem] p-[0.3rem] "
              key={index}
            >
              {stack}
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-start border-t-[0.2rem] border-b-[0.2rem] p-[2rem] drop-shadow-sm border-orange-200 sm:w-[20rem] sm:p-[0.2rem] sm:py-[1.5rem] px-[3rem]">
          <div className="w-full">
            {selectedWork.examples?.map((item, index) => (
              <>
                <img key={index} src={item} alt="items" className="w-full" />
              </>
            ))}
          </div>
          <div className="w-[50rem] flex flex-col gap-[2rem] sm:w-[21rem]">
            {/* <h1 className="text-1.5-500 pb-[2rem] sm:text-1-500">
              {t(`Work-items.Fitculator.${id}.overview.title`)}
            </h1> */}
            {renderProjectSection('overview')}
            {renderProjectSection('technical')}
            {renderProjectSection('achievements')}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-[5rem] items-center sm:w-full sm:gap-[2rem]">
       

        <div className="flex flex-col items-end p-[2rem] sm:p-[0.5rem] sm:w-[20rem]">
          <h1 className="text-1.5-500 pb-[2rem] sm:text-1-500">
            {t(`Work-items.title2-challenges`)}
          </h1>
          <div className="w-[50rem] flex flex-col gap-[2rem] items-end sm:w-[20rem]">
            <div className="text-1.25-300 text-end sm:text-0.8-400">
              <h2 className="pb-[1rem]">{t(`Work-items.${id}.subtitle2-1`)}</h2>
              <p className="w-[42rem] sm:text-0.7-300 sm:w-[19rem]">
                {t(`Work-items.${id}.description2-1`)}
              </p>
            </div>
            <div className="text-1.25-300 text-end sm:text-0.8-400">
              <h2 className="pb-[1rem]">{t(`Work-items.${id}.subtitle2-2`)}</h2>
              <p className="w-[42rem] sm:text-0.7-300 sm:w-[19rem]">
                {t(`Work-items.${id}.description2-2`)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start p-[2rem] sm:p-[1rem] sm:w-[20rem]">
          <h1 className="text-1.5-500 pb-[2rem] sm:text-1-500">
            {t(`Work-items.title3-solution`)}
          </h1>
          <div className="w-[50rem] flex flex-col gap-[2rem] sm:w-[20rem]">
            <div className="text-1.25-300 text-start sm:text-0.8-400">
              <h2 className="pb-[1rem]">{t(`Work-items.${id}.subtitle3-1`)}</h2>
              <p className="w-[42rem] sm:text-0.7-300 sm:w-[20rem]">
                {t(`Work-items.${id}.description3-1`)}
              </p>
            </div>
            <div className="text-1.25-300 text-start sm:text-0.8-400">
              <h2 className="pb-[1rem]">{t(`Work-items.${id}.subtitle3-2`)}</h2>
              <p className="w-[42rem] sm:text-0.7-300 sm:w-[19rem]">
                {t(`Work-items.${id}.description3-2`)}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50rem] flex flex-col gap-[2rem] items-center text-1.25-300 p-[2rem] sm:p-[1rem] sm:w-[20rem] sm:pb-[5rem]">
          <h1 className="text-1.5-500  sm:text-1-500">
            {t(`Work-items.title4-result`)}
          </h1>
          <p className="text-center w-[45rem] sm:text-0.7-300 sm:w-[20rem]">
            {t(`Work-items.${id}.description4-1`)}
          </p>
        </div>
      </div> */}

      <button
        className="hover:bg-gray-300 p-[0.7rem] rounded-[1rem] text-gray-700 bg-gray-200 dark:hover:bg-gray-300 hover:drop-shadow-md sm:text-0.3-300 sm:p-[0.4rem]"
        onClick={() => {
          navigate('/works/1');
        }}
      >
        ← {t(`back-button`)}
      </button>
    </div>
  );
}
