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
    <div className="container flex gap-[1rem]  items-center justify-center sm:pl-[2rem] sm:gap-[0.7rem]">
      <div>
        <a
          href={'/'}
          className=" text-black lg:text-2-700 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 sm:px-0 sm:text-1.1-700 pl-[10rem]"
        >
          Eunji
        </a>
      </div>
      <Nav />
      <div className="flex">
        <Language activeLang={activeLang} changeLanguage={changeLanguage} />
        <DarkMode toggleMode={toggleMode} darkmode={darkMode} />
      </div>
    </div>
  );
}
