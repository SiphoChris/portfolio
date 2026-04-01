type Project = {
  name: string
  description: string
  link: string
  github: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type Resources = {
  name: string
  link: string,
  category: string,
  domain: string,
}

type SocialLink = {
  label: string
  link: string
}

type SkillCategory = {
  name: string
  skills: string[]
}

export const TITLES: string[] = [
  'Full Stack Developer',
  'OSS Contributor',
  '[Reactjs & Nodejs ecosystem]',
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Core Languages',
    skills: [
      'JavaScript',
      'TypeScript',
      'Java',
      'Python',
      'SQL',
      'HTML',
      'CSS'
    ],
  },
  {
    name: 'Frontend',
    skills: [
      'React',
      'Astro',
      'Next.js',
      'Tanstack Start',
      'TailwindCSS',
      'shadcn/ui'
    ],
  },
  {
    name: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'REST APIs',
      'GraphQL',
    ],
  },
  {
    name: 'Tooling & Infra',
    skills: [
      'Git',
      'Vercel',
      'Docker',
      'GitHub Actions',
      'Cloudflare',
      'Linux',
    ],
  },
  {
    name: 'CMS & Design',
    skills: ['Strapi', 'WordPress', 'Figma', 'Canva'],
  },
  {
    name: 'Testing',
    skills: ['Vitest', 'Playwright', 'pytest', 'unittest', 'postman'],
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Metrorail Website',
    description:
      'A metrorail website to find schedules, routes, and ticketing information for South African commuters.',
    link: 'https://metrorail-website.siphonkebe.workers.dev/',
    image:
      'https://res.cloudinary.com/dfjfdrloj/image/upload/v1774612708/metrorail_nrmlhm.png',
    id: 'project0',
    github: 'https://github.com/SiphoChris/metrorail-website',
  },
  {
    name: 'South African ID',
    description:
      'OSS package for validating; extracting; and validating South African ID numbers.',
    link: 'https://www.npmjs.com/package/@south-african/id',
    image:
      'https://res.cloudinary.com/dfjfdrloj/image/upload/v1772112746/sa-id-portfolio_tdyfjc.png',
    id: 'project1',
    github: 'https://github.com/SiphoChris/south-african-id',
  },
  {
    name: 'lmscn (a shadcn/ui registry)',
    description:
      'OSS project that gives you production-ready interactive learning components you can drop into your LMS app in minutes.',
    link: 'https://lmscn.vercel.app/',
    image:
      'https://res.cloudinary.com/dfjfdrloj/image/upload/v1772112744/lmscn-portfolio_hlrasb.png',
    id: 'project2',
    github: 'https://github.com/SiphoChris/lmscn',
  },
  {
    name: 'howdoi (how do I)',
    description:
      'Unix/Linux knowledge base for howdoi — file management, text processing, and more.',
    link: 'https://www.npmjs.com/package/@howdoi-cli/cli',
    image:
      'https://res.cloudinary.com/dfjfdrloj/image/upload/v1773734168/howdoi-cli_w3n4fi.png',
    id: 'project3',
    github: 'https://github.com/SiphoChris/howdoi-cli',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'WeThinkCode_',
    title: 'Peer Technical Tutor',
    start: '2025',
    end: 'Present',
    link: 'https://wethinkcode.co.za/',
    id: 'work1',
  },
  {
    company: 'LC Studio',
    title: 'Full Stack Developer',
    start: '2024',
    end: '2025',
    link: 'https://lcstudio.co.za/',
    id: 'work2',
  },
]

export const RESOURCES: Resources[] = [
  {
    name: 'Testing Cookbook',
    link: 'https://drive.google.com/file/d/11UiJeuy2yQ6ahKY6uHcbzCWWdk29iR4h/view?usp=drive_link',
    category: "guide",
    domain: "testing",
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Testing Cookbook: e2e testing with Playwright",
    description:
      'Testing felt like a chore until I sat down to actually teach it. Writing The Testing Cookbook changed how I think about quality.',
    link: '/blog/i-wrote-a-testing-guide',
    uid: 'blog-4',
  },
  {
    title: "I Tried to Contribute to shadcn/ui — Here's What I Broke",
    description:
      'My first PR to a major OSS repo taught me more about contributing than any tutorial ever could.',
    link: '/blog/i-tried-to-contribute-to-shadcn-ui',
    uid: 'blog-3',
  },
  {
    title: 'My First npm Package — What Nobody Tells You About Publishing OSS',
    description:
      'A look back at building and publishing @south-african/id — my first npm package, what broke, what I learned, and why I claimed an entire npm org.',
    link: '/blog/my-first-npm-package',
    uid: 'blog-2',
  },
  {
    title:
      "I Built an Open-Source Component Registry for Interactive Learning — Here's Why",
    description:
      'Before building my edtech project, I needed the primitives. So I built them for everyone.',
    link: '/blog/i-built-an-open-source-component-registry-for-interactive-learning',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/SiphoChris',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sipho-nkebe-979783312/',
  },
  {
    label: 'Resume',
    link: 'https://drive.google.com/file/d/1ZrTX_1gdBde0oAfcXOEWculjLGnyfrxh/view?usp=sharing',
  },
  {
    label: 'npm',
    link: 'https://www.npmjs.com/~siphonkebe',
  },
]

export const EMAIL = 'siphonkebe@gmail.com'

// image: 'https://placehold.co/800x450',
