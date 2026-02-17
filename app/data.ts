type Project = {
  name: string
  description: string
  link: string
  video: string
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

export const PROJECTS: Project[] = [
  {
    name: 'South African ID',
    description:
      'OSS package for validating; extracting; and validating South African ID numbers.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'LC Studio',
    title: 'Full Stack Developer',
    start: '2024',
    end: '2025',
    link: 'https://lcstudio.co.za/',
    id: 'work1',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/SiphoChris',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sipho-nkebe-979783312/',
  }
]

export const EMAIL = 'siphonkebe@gmail.com'
