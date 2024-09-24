import { useTranslation } from 'react-i18next';
import WorkData from '../WorkData';
import { useNavigate } from 'react-router-dom';
import { Trans } from 'react-i18next';

export default function Works() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-[3rem] py-[10rem] dark:bg-gray-700 dark:text-gray-200 items-center ">
      <div className="flex flex-col gap-[0.5rem] items-center">
        <div className="flex flex-col items-center gap-[0.5rem]">
          <img
            className=" p-[1rem] rounded-[10rem]"
            src={WorkData.image}
            width={400}
          />
          {/* <h1 className="text-2-700">{WorkData.title}</h1> */}
          <div className="flex gap-[1rem]">
            <a href={WorkData.github}>
              <img
                className="dark:filter dark:invert dark:brightness-200"
                src={'/assets/github.svg'}
                width={25}
              />
            </a>
            <a href={WorkData.demoLink}>
              <img
                className="dark:filter dark:invert dark:brightness-200"
                src={'/assets/link.svg'}
                width={25}
              />
            </a>
          </div>
          <h2 className="text-1.25-300  text-gray-600 dark:text-gray-200">
            {WorkData.position}
          </h2>
          <p className="text-1.1-300 text-gray-500 dark:text-gray-400">
            {WorkData.duration}
          </p>
        </div>
        <ul className="flex gap-[1rem] text-0.9-300">
          {WorkData.stacks.map((stack, index) => (
            <li
              className="bg-orange-300 dark:text-gray-600 rounded-[1rem] p-[0.3rem]"
              key={index}
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex flex-col gap-[3rem] text-1.25-300 sm:text-0.7-300 w-[52rem] text-left">
        <div>
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
        <div>
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
        <div>
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

        <div>
          <li className="text-1.5-500 sm:text-1-500 py-[2rem]">
            {t(`Work-items.title5`)}
          </li>
          <Trans i18nKey="Work-items.solutions" components={{ br: <br /> }} />
        </div>
      </ul>

      <button
        className="hover:bg-gray-200 p-[0.4rem] rounded-[1rem]"
        onClick={() => {
          navigate('/');
        }}
      >
        ← {t(`back-button`)}
      </button>
    </div>
  );
}
