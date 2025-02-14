import DarkMode from '../util/DarkMode';

interface LanguageProps {
  activeLang: string;
  changeLanguage: (lang: string) => void;
  toggleMode: () => void;
  darkmode: string;
}

export default function Language({
  activeLang,
  changeLanguage,
  toggleMode,
  darkmode,
}: LanguageProps) {
  return (
    <div className="flex gap-[0.5rem] text-1.7-500 sm:text-0.9-500 sm:gap-[0.6rem] pl-[1rem] sm:pl-0">
      <div className="flex gap-[0.3rem]">
        <button
          className={`dark:text-gray-200  hover:text-orange-400 dark:hover:text-orange-400 navMenuItem ${
            activeLang === activeLang ? 'active' : 'inactive'
          }`}
          onClick={() => changeLanguage(activeLang)}
        >
          {activeLang === 'ko' ? '🇰🇷' : '🇬🇧'}
        </button>
        {/* <button
          className={`dark:text-gray-200  hover:text-orange-400 dark:hover:text-orange-400 navMenuItem ${
            activeLang === 'en' ? 'active' : 'inactive'
          }`}
          onClick={() => changeLanguage('en')}
        >
          🇬🇧
        </button> */}
      </div>
      <div className="flex items-center justify-center">
        <DarkMode toggleMode={toggleMode} darkmode={darkmode} />
      </div>
    </div>
  );
}
