import DarkMode from '../util/DarkMode';
import Language from '../locales/Language';
import Nav from './Nav';

interface HeaderProps {
  activeLang: string;
  changeLanguage: (lang: string) => void;
  toggleMode: () => void;
  darkMode: string;
}

export default function Header({
  activeLang,
  changeLanguage,
  toggleMode,
  darkMode,
}: HeaderProps) {
  return (
    <div className="flex gap-[2rem] flex-row items-center text-2-500 justify-around dark:bg-gray-700 h-[4rem] sm:px-[0.5rem] sm:py-[1rem] sm:w-[41rem] sm:h-[6rem] sm:gap-[0.7rem]">
      <div>
        <a
          href={'/'}
          className="p-[0.5rem] text-black text-2-700 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 sm:px-0 sm:text-1.5-700"
        >
          Eunji
        </a>
      </div>
      <Nav />
      <Language activeLang={activeLang} changeLanguage={changeLanguage} />
      <DarkMode toggleMode={toggleMode} darkmode={darkMode} />
    </div>
  );
}
