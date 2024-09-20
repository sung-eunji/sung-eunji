interface ProjectCard {
  id: number;
  title: string;
  duration: string;
  image: string;
  stacks: string[];
}

const ProjectCardListData: ProjectCard[] = [
  {
    id: 1,
    title: 'Rolling Paper',
    duration: 'December 2023 (2 weeks)',
    image: '/assets/rolling.png',
    stacks: ['React', 'Styled Component'],
  },
  {
    id: 2,
    title: 'Taskify',
    duration: 'March 2024 (3 weeks)',
    image: '/assets/taskify.png',
    stacks: ['Next.js 13 (page routing)', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 3,
    title: 'YUMU',
    duration: 'December 2023 (2 weeks)',
    image: '/assets/yumu.png',
    stacks: ['Next.js 13 (page routing)', 'TypeScript', 'TailwindCSS'],
  },
];

export default ProjectCardListData;
