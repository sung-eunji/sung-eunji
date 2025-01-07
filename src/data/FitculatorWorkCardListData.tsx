interface WorkCard {
  id: number;
  title: string;
  position: string;
  businessform: string;
  duration: string;
  demoLink: string;
  github: string;
  logo: string;
  stacks: string[];
}

const FitculatorWorkCardListData: WorkCard[] = [
  {
    id: 1,
    duration: 'June 2024 (on going maintenance)',
    title: 'Fitculator web ',
    businessform: '(b2c)',
    position: 'Fullstack Developer (internship)',
    stacks: [
      'Next.js 14 (SSR)',
      'TypeScript',
      'TailwindCSS',
      'React-Hook-Form',
      'i18n',
      'Prisma',
    ],
    github: 'https://github.com/BoostPerformance/fitculator-io',
    demoLink: 'https://fitculator.io',
    logo: '/assets/fitculatorweb-landing.png',
  },
  {
    id: 2,
    duration: 'November 2024',
    title: 'Fitculator x Orevo',
    businessform: '(b2b)',
    position: 'Frontend Developer',
    stacks: ['Next.js 14 (SSR)', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/BoostPerformance/fitculator-io',
    demoLink: 'https://fitculator.io',
    logo: '/assets/orevo-landing.png',
  },
  {
    id: 3,
    duration: 'December 2024',
    title: 'Fitculator x Wegobuy',
    businessform: '(b2h)',
    position: 'Frontend Developer',
    stacks: ['Next.js 14 (SSR)', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/BoostPerformance/fitculator-io',
    demoLink: 'https://fitculator.io',
    logo: '/assets/wegobuy-landing.png',
  },
  {
    id: 4,
    duration: 'Janurary 2025 (on going)',
    title: 'Fitculator x F45',
    businessform: '(b2b)',
    position: 'Fullstack Developer',
    stacks: [
      'Next.js 14 (SSR)',
      'TypeScript',
      'TailwindCSS',
      'React-Hook-Form',
      'Prisma',
    ],
    github: 'https://github.com/BoostPerformance/fitculator-io',
    demoLink: 'https://fitculator.io',
    logo: '/assets/F45-logo.png',
  },
];

export default FitculatorWorkCardListData;
