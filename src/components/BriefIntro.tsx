import { useTranslation } from 'react-i18next';

export default function BriefIntro() {
  const { t } = useTranslation();

  return (
    <div className="text-1.25-300 flex flex-col lg:items-start gap-4 dark:text-gray-200 dark:bg-gray-700 px-12 items-center">
      <h1 className="text-2-700 ">{t(`briefIntro.title`)}</h1>
      <p className="lg:text-left text-center">{t(`briefIntro.description`)}</p>
    </div>
  );
}
