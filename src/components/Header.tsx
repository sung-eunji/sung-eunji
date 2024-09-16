import DarkMode from '../util/DarkMode';
import Language from '../locales/Language';
import Nav from './Nav';
import { Link } from 'react-router-dom';

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
    <div className="flex gap-[2rem] flex-row items-center text-2-500 justify-around dark:bg-gray-700 h-[4rem]">
      <div className="">
        <Link
          to={'/'}
          className="p-[0.5rem] text-black text-2-700 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 "
        >
          Eunji
        </Link>
      </div>
      <Nav />
      <Language activeLang={activeLang} changeLanguage={changeLanguage} />
      <DarkMode toggleMode={toggleMode} darkmode={darkMode} />
    </div>
  );
}
