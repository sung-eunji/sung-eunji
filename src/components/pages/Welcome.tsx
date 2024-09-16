import { useState } from 'react';
import Footer from '../Footer';
import Nav from '../Nav';
import { useTranslation } from 'react-i18next';

export default function Welcome() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  return (
    <>
      <div className="dark:bg-gray-600 ">
        <h1>{t(`header.ViteandReact`)}</h1>
        <h1></h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            likes{count}
          </button>
        </div>
        <div className="flex flex-col items-center gap-[1rem] py-[2rem]">
          <Nav />
          <Footer />
        </div>
      </div>
    </>
  );
}
