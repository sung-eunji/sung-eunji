import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center p-[10rem] dark:bg-gray-700 gap-[3rem] dark:text-gray-200">
      <div className="flex flex-col gap-[1rem] items-start">
        <h1 className="text-1.7-500 ">{t(`About.title1`)}</h1>
        <h2 className="text-start">{t(`About.description1`)}</h2>
      </div>
      <div className="flex flex-col gap-[1rem] items-end">
        <h1 className="text-1.7-500 ">{t(`About.title2`)}</h1>
        <h2 className="text-end">{t(`About.description2`)}</h2>
      </div>
    </div>
  );
}
