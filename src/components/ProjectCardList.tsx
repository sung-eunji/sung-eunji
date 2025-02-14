import ProjectCardListData from '../data/ProjectCardListData';

interface ProjectCardProps {
  onCardClick: (id: number) => void;
}

export default function ProjectCardList({ onCardClick }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-[3rem] items-center py-[5rem] sm:pb-[6.5rem] sm:gap-[5rem] sm:pt-[5rem]">
      {ProjectCardListData.slice()
        .reverse()
        .map((card, index) => (
          <div key={index} className="flex gap-[0.5rem] w-[35rem] sm:w-[20rem]">
            <div className="flex flex-col items-start gap-[4rem] sm:gap-[2rem]">
              <div className="flex flex-col items-start w-[17rem] mt-[0.5rem] sm:w-[10rem]">
                <h1 className="text-1.7-700 text-gray-800 dark:text-gray-200 sm:text-1.1-700">
                  {card.title}
                </h1>
                <p className="text-1-500 text-gray-500 dark:text-gray-200 sm:text-0.7-300">
                  {card.duration}
                </p>
              </div>
              <button
                className="hover:bg-gray-300 p-[0.7rem] rounded-[1rem] text-gray-700 bg-gray-200 dark:hover:bg-gray-300 hover:drop-shadow-md sm:text-0.7-300 sm:p-[0.4rem] sm:rounded-[0.7rem]"
                key={card.id}
                onClick={() => onCardClick(card.id)}
              >
                see detail →
              </button>
            </div>
            <img
              className="rounded-[1rem] drop-shadow-md w-[20rem] sm:h-[8rem] sm:w-[10rem]"
              src={card.image}
              alt="example-image"
            />
          </div>
        ))}
    </div>
  );
}
