import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import WorkData from '../../data/WorkData';
//import WorkCardList from '../WorkCardList';

export default function Works() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const handleCardClick = (id: number) => {
  //   navigate(`/works/fitculator/${id}`);
  // };

  return (
    <div className="flex flex-col gap-[3rem] py-[10rem] dark:bg-gray-700 dark:text-gray-200 items-center sm:w-full sm:py-[2rem]">
      {WorkData.map((item) => (
        <button
          onClick={() => {
            navigate(`${item.id}`);
          }}
        >
          <img
            className="drop-shadow-md w-[20rem] sm:h-[8rem] sm:w-[10rem]"
            src={item.logo}
            alt="example-image"
          />
          <div>{item.position}</div>
        </button>
      ))}

      <button
        className="hover:bg-gray-200 p-[0.4rem] rounded-[1rem]"
        onClick={() => {
          navigate('/');
        }}
      >
        ← {t(`back-button`)}
      </button>
    </div>
  );
}
