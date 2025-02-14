import FitculatorWorkCardListData from '../data/FitculatorWorkCardListData';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// interface ProjectCardProps {
//   onCardClick: (id: number) => void; //
// }

export default function WorkCardList() {
  const navigate = useNavigate();
  const handleCardClick = (id: number) => {
    navigate(`/fitculator/${id}`);
  };
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-[3rem] items-center py-[5rem] sm:pt-[4rem] sm:pb-[6.5rem] sm:gap-[5rem] md:pt-[6rem]">
      {FitculatorWorkCardListData.slice()
        .reverse()
        .map((card) => (
          <div className="flex lg:gap-[5rem] sm:gap-[3rem] w-[45rem] sm:w-[20rem] md:gap-[4rem]">
            <div className="flex flex-col items-start gap-[4rem] sm:gap-[2rem]">
              <div className="flex flex-col items-start w-[18rem] mt-[0.5rem] sm:w-[10rem]">
                <div className="flex sm:flex-col sm:items-start items-center gap-[0.2rem] w-[20rem]">
                  <h1 className="text-1.7-700 text-gray-800 dark:text-gray-200 sm:text-1.1-700 text-left">
                    {card.title}
                  </h1>
                  <span className="text-0.7-300 text-gray-700 dark:text-gray-200  border-amber-200 bg-opacity-35 bg-amber-200  border-[0.01rem] rounded-[0.2rem] py-[0.2rem] px-[0.4rem]  drop-shadow">
                    {card.businessform}
                  </span>
                </div>

                <p className="text-1-500 text-gray-500 dark:text-gray-200 sm:text-0.7-300">
                  {card.duration}
                </p>
              </div>
              <button
                className="hover:bg-gray-300 p-[0.7rem] rounded-[1rem] text-gray-700 bg-gray-200 dark:hover:bg-gray-300 hover:drop-shadow-md sm:text-0.7-300 sm:p-[0.4rem] sm:rounded-[0.7rem]"
                key={card.id}
                onClick={() => handleCardClick(card.id)}
              >
                {t(`see-details`)} →
              </button>
            </div>
            <img
              className="rounded-[1rem] drop-shadow-md w-[20rem] sm:h-[8rem] sm:w-[10rem]"
              src={card.logo}
              alt="example-image"
            />
          </div>
        ))}
      <div>
        <button
          className="hover:bg-gray-300 p-[0.7rem] rounded-[1rem] text-gray-700 bg-gray-200 dark:hover:bg-gray-300 hover:drop-shadow-md sm:text-0.7-300 sm:p-[0.4rem] sm:rounded-[0.7rem]"
          onClick={() => {
            navigate('/works');
          }}
        >
          ← {t(`back-button`)}
        </button>
      </div>
    </div>
  );
}
