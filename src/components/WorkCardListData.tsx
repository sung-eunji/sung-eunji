interface WorkCard {
  id: number;
  title: string;
  duration: string;
  image: string;
  stacks: string[];
}

const WorkCardListData: WorkCard[] = [
  {
    id: 1,
    title: 'Fitculator Web',
    duration: 'June 2024',
    image: '/assets/fitculatorweb-landing.png',
    stacks: ['React', 'Styled Component'],
  },
  {
    id: 2,
    title: 'Orevo',
    duration: 'March 2024 (3 weeks)',
    image: '/assets/orevo-landing.png',
    stacks: ['Next.js 13 (page routing)', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 3,
    title: 'Fitculator x Wegobuy (b2h)',
    duration: 'December 2023 (2 weeks)',
    image: '/assets/wegobuy-landing.png',
    stacks: ['Next.js 13 (page routing)', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 4,
    title: 'Fitculator x F45 Seoul (b2b)',
    duration: 'December 2023 (2 weeks)',
    image: '/assets/F45-logo.png',
    stacks: ['Next.js 13 (page routing)', 'TypeScript', 'TailwindCSS'],
  },
];

export default WorkCardListData;
