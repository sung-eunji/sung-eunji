interface Project {
  id: number;
  duration: string;
  title: string;
  position: string;
  stacks: string[];
  github: string;
  demoLink: string;
  logo: string;
}

const ProjectData: Project[] = [
  {
    id: 1,
    duration: 'March 2024 (3 weeks)',
    title: 'Rolling Paper',
    position: 'Frontend Developer',
    stacks: ['React', 'Styled Component'],
    github: 'https://github.com/codeit-sprint2-team-12/team-12-rolling',
    demoLink: 'https://fluffy-shortbread-07838a.netlify.app',
    logo: '/assets/logo-rolling.svg',
  },
  {
    id: 2,
    duration: 'March 2024 (3 weeks)',
    title: 'Taskify',
    position: 'Frontend Developer',
    stacks: ['Next.js 13 (page routing)', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/codeit-fe2-2/taskify',
    demoLink: 'https://taskify-harigari.vercel.app',
    logo: '/assets/logo-taskify.svg',
  },
  {
    id: 3,
    duration: 'December 2023 (2 weeks)',
    title: 'YUMU',
    position: 'Frontend Developer',
    stacks: ['Next.js 13 (page routing)', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/Team-YUMU/YUMU-FE',
    demoLink: 'https://yu-mu.vercel.app',
    logo: '/assets/logo-yumu.svg',
  },
];

export default ProjectData;
