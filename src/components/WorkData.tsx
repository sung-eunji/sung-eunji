interface Work {
  id: number;
  duration: string;
  title: string;
  position: string;
  stacks: string[];
  github: string;
  demoLink: string;
  problem: string;
  solve: string;
}

const WorkData: Work = {
  id: 1,
  duration: 'June 2024 (on going)',
  title: 'Fitculator',
  position: 'Fullstack Developer',
  stacks: [
    'Next.js 13 (app routing)',
    'TypeScript',
    'TailwindCSS',
    'React-Hook-Form',
    'i18n',
    'Prisma',
  ],
  github: 'https://github.com/BoostPerformance/fitculator-io',
  demoLink: 'https://fitculator.io',
  problem: '',
  solve: '',
};

export default WorkData;
