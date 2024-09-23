interface Work {
  id: number;
  duration: string;
  title: string;
  position: string;
  stacks: string[];
  github: string;
  demoLink: string;
  image: string;
}

const WorkData: Work = {
  id: 1,
  duration: 'June 2024 (on going)',
  title: 'Fitculator',
  position: 'Fullstack Developer',
  stacks: [
    'Next.js 14 (app routing)',
    'TypeScript',
    'TailwindCSS',
    'React-Hook-Form',
    'i18n',
    'Prisma',
  ],
  github: 'https://github.com/BoostPerformance/fitculator-io',
  demoLink: 'https://fitculator.io',
  image: '/assets/fitculator.svg',
};

export default WorkData;
