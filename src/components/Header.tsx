//import DarkMode from '../util/DarkMode';
import Language from '../locales/Language';
import Nav from './Nav';

interface HeaderProps {
  activeLang: string;
  changeLanguage: (lang: string) => void;
  toggleMode: () => void;
  darkmode: string;
}

export default function Header({
  activeLang,
  changeLanguage,
  toggleMode,
  darkmode,
}: HeaderProps) {
  return (
    <div className="bg-gray-100 z-50 fixed  flex gap-[3rem] items-center justify-center sm:gap-[1.4rem] lg:py-[1rem] border-b-2 sm:w-full w-full md:justify-around top-0 left-0 right-0 ">
      <div>
        <a
          href={'/'}
          className=" text-black lg:text-2-700 
          md:text-1.5-700 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 sm:px-0 sm:text-1.1-700"
        >
          Eunji
        </a>
      </div>
      <Nav />
      <div className="flex items-center justify-center">
        <Language
          activeLang={activeLang}
          changeLanguage={changeLanguage}
          toggleMode={toggleMode}
          darkmode={darkmode}
        />
      </div>
    </div>
  );
}
