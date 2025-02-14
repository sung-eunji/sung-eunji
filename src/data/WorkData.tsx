import { ReactNode } from 'react';

interface Work {
  id: number;
  duration: string;
  title: string;
  position: ReactNode;
  stacks: string[];
  github: string;
  demoLink: string;
  logo: string;
}

const WorkData: Work[] = [
  {
    id: 1,
    duration: 'June 2024 (on going)',
    title: 'Fitculator',
    position: (
      <div>
        Fullstack Developer <br /> <span>(internship, freelance) </span>
      </div>
    ),
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
    logo: '/assets/fitculator-logo.png',
  },
  // {
  //   id: 2,
  //   duration: 'June 2024 (on going)',
  //   title: 'Fitculator x Orevo',
  //   position: 'Frontend Developer',
  //   stacks: [
  //     'Next.js 14 (SSR)',
  //     'TypeScript',
  //     'TailwindCSS',
  //     'React-Hook-Form',
  //     'i18n',
  //     'Prisma',
  //   ],
  //   github: 'https://github.com/BoostPerformance/fitculator-io',
  //   demoLink: 'https://fitculator.io',
  //   logo: '/assets/fitculator-logo.png',
  // },
  // {
  //   id: 3,
  //   duration: 'June 2024 (on going)',
  //   title: 'Fitculator x Wegobuy',
  //   position: 'Frontend Developer',
  //   stacks: [
  //     'Next.js 14 (SSR)',
  //     'TypeScript',
  //     'TailwindCSS',
  //     'React-Hook-Form',
  //     'i18n',
  //     'Prisma',
  //   ],
  //   github: 'https://github.com/BoostPerformance/fitculator-io',
  //   demoLink: 'https://fitculator.io',
  //   logo: '/assets/fitculator-logo.png',
  // },
  // {
  //   id: 4,
  //   duration: 'Janurary 2025 (on going)',
  //   title: 'Fitculator x F45 (b2b)',
  //   position: 'Fullstack Developer',
  //   stacks: [
  //     'Next.js 14 (SSR)',
  //     'TypeScript',
  //     'TailwindCSS',
  //     'React-Hook-Form',
  //     'Prisma',
  //   ],
  //   github: 'https://github.com/BoostPerformance/fitculator-io',
  //   demoLink: 'https://fitculator.io',
  //   logo: '/assets/fitculator-logo.png',
  // },
];
export default WorkData;
