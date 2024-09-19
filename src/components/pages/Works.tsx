import { useTranslation } from 'react-i18next';
import WorkData from '../WorkData';
import { useNavigate } from 'react-router-dom';

export default function Works() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-[3rem] py-[10rem] dark:bg-gray-700 dark:text-gray-200 items-center ">
      <div className="flex flex-col gap-[0.5rem] items-center">
        <div className="flex flex-col items-center gap-[0.5rem]">
          <h1 className="text-2-700">{WorkData.title}</h1>
          <div className="flex gap-[1rem]">
            <a href={WorkData.github}>
              <img
                className="dark:filter dark:invert dark:brightness-200"
                src={'/assets/github.svg'}
                width={20}
              />
            </a>
            <a href={WorkData.demoLink}>
              <img
                className="dark:filter dark:invert dark:brightness-200"
                src={'/assets/link.svg'}
                width={20}
              />
            </a>
          </div>
          <h2 className="text-1.25-300  text-gray-600 dark:text-gray-200">
            {WorkData.position}
          </h2>
          <p className="text-1-300 text-gray-500 dark:text-gray-400">
            {WorkData.duration}
          </p>
        </div>
        <ul className="flex gap-[1rem] text-0.7-300">
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

      <div className="flex flex-col gap-[1rem]">
        <h1>{t(`Work-items.description1`)}</h1>
        <h1>{t(`Work-items.description2`)}</h1>
      </div>

      <button
        className="hover:bg-gray-200 p-[0.4rem] rounded-[1rem]"
        onClick={() => {
          navigate('/');
        }}
      >
        ← 돌아가기
      </button>
    </div>
  );
}
