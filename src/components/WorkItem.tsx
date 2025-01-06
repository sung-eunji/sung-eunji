//import { useTranslation } from 'react-i18next';
//import { useNavigate } from 'react-router-dom';
import WorkCardList from './WorkCardList';
//import { Trans } from 'react-i18next';

export default function WorkItem() {
  //const navigate = useNavigate();
  // const { t } = useTranslation();
  // const handleCardClick = (id: number) => {
  //     navigate(`/works/fitculator/${id}`);
  //   };
  return (
    <>
      {/*<div className="flex flex-col gap-[0.5rem] items-center">
        <ul className="flex gap-[1rem] text-0.9-300 sm:text-0.7-300 sm:grid-cols-3 sm:grid">
         {WorkData.stacks.map((stack, index) => (
            <li
              className="bg-orange-300 dark:text-gray-600 rounded-[1rem] p-[0.3rem] sm:p-[0.2rem]"
              key={index}
            >
              {stack}
            </li>
          ))}
        </ul>
      </div> */}
      <WorkCardList />
      {/* <ul className="flex flex-col gap-[3rem] text-1.25-300 sm:text-0.7-300 lg:w-[52rem] text-left sm:w-full">
        <div className="sm:w-[22rem] sm:px-[1rem]">
          <li className="text-1.5-500 pb-[2rem] sm:text-1-500">
            {t(`Work-items.title1`)}
          </li>
          <li className="text-1.25-300 text-start sm:text-0.9-300 pb-[2rem]">
            <Trans
              i18nKey="Work-items.description1"
              components={{ br: <br /> }}
            />
          </li>
        </div>
        <div className="sm:w-[22rem] sm:px-[1rem]">
          <li className="text-1.5-500 pb-[2rem] sm:text-1-500">
            {t(`Work-items.title2`)}
          </li>
          <li className="text-1.25-300 text-start sm:text-0.9-300">
            <Trans
              i18nKey="Work-items.description2"
              components={{ br: <br /> }}
            />
          </li>
        </div>
        <div className="sm:w-[22rem] sm:px-[1rem]">
          <li className="text-1.5-500 pb-[2rem] sm:text-1-500">
            {t(`Work-items.title3`)}
          </li>
          <li className="text-1.25-300 text-start sm:text-0.9-300">
            <Trans
              i18nKey="Work-items.description3"
              components={{ br: <br /> }}
            />
          </li>
        </div>
        <div className="sm:w-[22rem] sm:px-[1rem]">
          <li className="text-1.5-500 pb-[2rem] sm:text-1-500">
            {t(`Work-items.title4`)}
          </li>
          <li className="text-1.25-300 text-start sm:text-0.9-300">
            <Trans
              i18nKey="Work-items.description4"
              components={{ br: <br /> }}
            />
          </li>
        </div>

        <div className="sm:w-[22rem] sm:px-[1rem]">
          <li className="text-1.5-500 sm:text-1-500 py-[2rem]">
            {t(`Work-items.title5`)}
          </li>
          <li className="text-1.25-300 text-start sm:text-0.9-300">
            <Trans
              i18nKey="Work-items.challenges"
              components={{ br: <br /> }}
            />
          </li>
          <li className="text-1.25-300 text-start sm:text-0.9-300 py-[2rem]">
            <Trans i18nKey="Work-items.solutions" components={{ br: <br /> }} />
          </li>
        </div>
      </ul> */}
    </>
  );
}
