import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const keywords = [
    `About.keyword1`,
    `About.keyword2`,
    `About.keyword3`,
    `About.keyword4`,
  ];

  return (
    <div className="flex flex-col lg:items-center justify-center p-[10rem] dark:bg-gray-700 gap-[3rem] lg:h-[47rem] h-auto md:w-auto dark:text-gray-200 sm:w-full sm:p-[0.5rem] sm:pt-[1rem] sm:pb-[5rem] my-[10rem] lg:pt-[19rem]">
      <div className="flex gap-[5rem] ">
        {keywords.map((keyword, index) => (
          <div className="bg-yellow-400 py-2 px-4 rounded-full" key={index}>
            {t(keyword)}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[1rem] items-start p-[2rem] lg:h-[20rem] justify-center sm:gap-[1rem] h-auto sm:w-full sm:p-[1rem]">
        <h1 className="text-1.7-500 sm:text-1.25-500">{t(`About.title1`)}</h1>
        <h2 className="text-start text-1.25-300 sm:text-0.9-300">
          {t(`About.description1`)}
        </h2>
      </div>
      <div className="flex flex-col gap-[1rem] items-end p-[2rem] h-[20rem] justify-center sm:gap-[3rem] sm:w-full">
        <h1 className="text-1.7-500 sm:text-1.25-500">{t(`About.title2`)}</h1>
        <h2 className="text-end text-1.25-300  sm:text-0.9-300">
          {t(`About.description2`)}
        </h2>
      </div>
    </div>
  );
}
