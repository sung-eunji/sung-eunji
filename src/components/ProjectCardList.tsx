import ProjectCardListData from './ProjectCardListData';

interface ProjectCardProps {
  onCardClick: (id: number) => void; // onClick 함수는 number 타입의 ID를 받음
}

export default function ProjectCardList({ onCardClick }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-[3rem] items-center py-[5rem] ">
      {ProjectCardListData.slice()
        .reverse()
        .map((card) => (
          <div className="flex gap-[0.5rem] w-[35rem]">
            <div className="flex flex-col items-start gap-[4rem]">
              <div className="flex flex-col items-start w-[17rem] mt-[0.5rem]">
                <h1 className="text-1.7-700 text-gray-800 dark:text-gray-200">
                  {card.title}
                </h1>
                <p className="text-1-500 text-gray-500 dark:text-gray-200">
                  {card.duration}
                </p>
              </div>
              <button
                className="hover:bg-gray-300 p-[0.7rem] rounded-[1rem] text-gray-700 bg-gray-200 dark:hover:bg-gray-300 hover:drop-shadow-md"
                key={card.id}
                onClick={() => onCardClick(card.id)}
              >
                see detail →
              </button>
            </div>
            <img
              className="rounded-[1rem] drop-shadow-md w-[20rem]"
              src={card.image}
              alt="example-image"
            />
          </div>
        ))}
    </div>
  );
}
