import DarkMode from '../util/DarkMode';

interface LanguageProps {
  activeLang: string;
  changeLanguage: (lang: 'en' | 'fr' | 'kr') => void;
  toggleMode: () => void;
  darkmode: string;
  langDropdown: boolean;
  setIsOpen: (isOpen: boolean) => void; // 추가된 프롭
}

export default function Language({
  setIsOpen,
  changeLanguage,
  toggleMode,
  darkmode,
  langDropdown,
  activeLang,
}: LanguageProps) {
  return (
    <div className="flex gap-[5rem] text-1.7-500 sm:text-0.9-500 sm:gap-[0.6rem] pl-[1rem] sm:pl-0 ">
      <div className="">
        <div className="absolute top-5">
          <button
            className={`dark:text-gray-200  hover:text-orange-400 dark:hover:text-orange-400 navMenuItem`}
            onClick={() => setIsOpen(!langDropdown)}
          >
            {activeLang === 'en'
              ? '🇬🇧'
              : activeLang === 'kr'
              ? '🇰🇷'
              : activeLang === 'fr'
              ? '🇫🇷'
              : 'lang'}
            {/* 현재 선택된 언어 표시 */}
          </button>
          {langDropdown && (
            <div className="relative list-none p-5">
              <li>
                <button onClick={() => changeLanguage('en')}>🇬🇧</button>
              </li>
              <li>
                <button onClick={() => changeLanguage('kr')}>🇰🇷</button>
              </li>
              <li>
                <button onClick={() => changeLanguage('fr')}>🇫🇷</button>
              </li>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <DarkMode toggleMode={toggleMode} darkmode={darkmode} />
      </div>
    </div>
  );
}
