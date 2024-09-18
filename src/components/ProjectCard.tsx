interface ProjectCardProps {
  onCardClick: (id: number) => void; // onClick 함수는 number 타입의 ID를 받음
}

export default function ProjectCard({ onCardClick }: ProjectCardProps) {
  const cardList = [
    {
      id: 1,
      title: 'Rolling Paper',
      duration: 'December 2023 (2 weeks)',
      image: './src/assets/rolling.png',
      stacks: ['React', 'Styled Component'],
    },
    {
      id: 2,
      title: 'Taskify',
      duration: 'March 2024 (3 weeks)',
      image: './src/assets/taskify.png',
      stacks: ['Next.js 13 (page routing)', 'TypeScript', 'TailwindCSS'],
    },
    {
      id: 3,
      title: 'YUMU',
      duration: 'December 2023 (2 weeks)',
      image: './src/assets/yumu.png',
      stacks: ['Next.js 13 (page routing)', 'TypeScript', 'TailwindCSS'],
    },
  ];

  return (
    <div className="flex flex-col gap-[3rem] items-center py-[5rem] ">
      {cardList.map((card) => (
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
              className="bg-gray-200 dark:bg-gray-100 p-[0.4rem] rounded-[0.7rem] dark:text-gray-700 hover:bg-gray-300 hover:dark:bg-gray-300"
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
