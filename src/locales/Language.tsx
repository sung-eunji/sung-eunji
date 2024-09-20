interface LanguageProps {
  activeLang: string;
  changeLanguage: (lang: string) => void;
}

export default function Language({
  activeLang,
  changeLanguage,
}: LanguageProps) {
  return (
    <div className="flex gap-[5rem] text-1.7-500 sm:text-1-500 sm:gap-[0.7rem]">
      <button
        className={`dark:text-gray-200  hover:text-orange-400 dark:hover:text-orange-400 navMenuItem ${
          activeLang === 'ko' ? 'active' : 'inactive'
        }`}
        onClick={() => changeLanguage('ko')}
      >
        Korean
      </button>
      <button
        className={`dark:text-gray-200  hover:text-orange-400 dark:hover:text-orange-400 navMenuItem ${
          activeLang === 'en' ? 'active' : 'inactive'
        }`}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
    </div>
  );
}
