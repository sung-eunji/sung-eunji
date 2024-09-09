import DarkMode from './DarkMode';
import Language from './Language';
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
    <div className="flex gap-[2rem] flex-row border-[0.1rem] border-black items-center text-2-400">
      <div className="">
        <Link to={'/'} className=" text-black">
          Sung Eunji
        </Link>
      </div>
      <Nav />
      <Language activeLang={activeLang} changeLanguage={changeLanguage} />
      <DarkMode toggleMode={toggleMode} darkmode={darkMode} />
    </div>
  );
}
