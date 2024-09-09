interface LanguageProps {
  activeLang: string;
  changeLanguage: (lang: string) => void;
}

export default function Language({
  activeLang,
  changeLanguage,
}: LanguageProps) {
  return (
    <div className="flex gap-[2rem]">
      <button
        className={`navMenuItem ${activeLang === 'ko' ? 'active' : 'inactive'}`}
        onClick={() => changeLanguage('ko')}
      >
        Korean
      </button>
      <button
        className={`navMenuItem ${activeLang === 'en' ? 'active' : 'inactive'}`}
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
    </div>
  );
}
