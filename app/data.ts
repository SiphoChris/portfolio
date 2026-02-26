type Project = {
  name: string
  description: string
  link: string
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
  'Frontend Engineer',
  'Backend Developer',
  'OSS Contributor',
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'tRPC', 'Prisma', 'PostgreSQL', 'REST APIs'],
  },
  {
    name: 'Tooling & Infra',
    skills: ['Git', 'Vercel', 'Docker', 'GitHub Actions', 'npm'],
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'South African ID',
    description:
      'OSS package for validating; extracting; and validating South African ID numbers.',
    link: 'https://www.npmjs.com/package/@south-african/id',
    image: 'https://res.cloudinary.com/dfjfdrloj/image/upload/v1772112746/sa-id-portfolio_tdyfjc.png',
    id: 'project1',
  },
  {
    name: 'lmscn (a shadcn/ui registry)',
    description:
      'OSS project that gives you production-ready interactive learning components you can drop into your LMS app in minutes.',
    link: 'https://lmscn.vercel.app/',
    image: 'https://res.cloudinary.com/dfjfdrloj/image/upload/v1772112744/lmscn-portfolio_hlrasb.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'LC Studio',
    title: 'Full Stack Developer',
    start: '2024',
    end: '2025',
    link: 'https://lcstudio.co.za/',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'I Built an Open-Source Component Registry for Interactive Learning — Here\'s Why',
    description: 'Before building my edtech project, I needed the primitives. So I built them for everyone.',
    link: '/blog/i-built-an-open-source-component-registry-for-interactive-learning',
    uid: 'blog-1',
  },
  {
    title: 'My First npm Package — What Nobody Tells You About Publishing OSS',
    description: 'A look back at building and publishing @south-african/id — my first npm package, what broke, what I learned, and why I claimed an entire npm org.',
    link: '/blog/my-first-npm-package',
    uid: 'blog-2',
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
]

export const EMAIL = 'siphonkebe@gmail.com'



// image: 'https://placehold.co/800x450',