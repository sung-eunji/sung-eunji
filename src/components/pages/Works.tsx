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
    <div className="sm:py-[4rem]">
      <div className="flex flex-col gap-[3rem] py-[10rem] dark:bg-gray-700 dark:text-gray-200 items-center sm:w-full sm:py-[2rem] ">
        {WorkData.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              navigate(`${item.id}`);
            }}
          >
            <img
              className="drop-shadow-md w-[20rem] sm:h-[4rem] sm:w-[10rem] object-contain "
              src={item.logo}
              alt="example-image"
            />
            <div className="lg:pt-[1rem] sm:pt-0 sm:text-0.9-500">
              {item.position}
            </div>
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
    </div>
  );
}
