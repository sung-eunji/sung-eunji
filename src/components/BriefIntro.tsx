import { useTranslation } from 'react-i18next';

export default function BriefIntro() {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-1.25-300 flex flex-col items-start gap-[1rem] dark:text-gray-200 dark:bg-gray-700">
        <h1 className="text-2-700 ">{t(`briefIntro.title`)}</h1>
        <p className="text-left">{t(`briefIntro.description`)}</p>
      </div>
    </>
  );
}
