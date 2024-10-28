interface LanguageProps {
  activeLang: string;
  changeLanguage: (lang: string) => void;
}

export default function Language({
  activeLang,
  changeLanguage,
}: LanguageProps) {
  return (
    <div className="flex gap-[5rem] text-1.7-500 sm:text-0.9-500 sm:gap-[0.4rem] pl-[1rem] sm:pl-0">
      <button
        className={`dark:text-gray-200  hover:text-orange-400 dark:hover:text-orange-400 navMenuItem ${
          activeLang === 'ko' ? 'active' : 'inactive'
        }`}
        onClick={() => changeLanguage('ko')}
      >
        Kor
      </button>
      <button
        className={`dark:text-gray-200  hover:text-orange-400 dark:hover:text-orange-400 navMenuItem ${
          activeLang === 'en' ? 'active' : 'inactive'
        }`}
        onClick={() => changeLanguage('en')}
      >
        Eng
      </button>
    </div>
  );
}
