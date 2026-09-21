import type { TechSlug } from './tech'

export interface Project {
  slug: string
  title: string
  /** One line for the card. */
  tagline: string
  /** Full copy for the detail dialog. */
  description: string
  /** What I actually did on this engagement. */
  role: string
  /**
   * TODO(van): fill in the real engagement years — the old site never stated
   * them, so nothing is invented here. Leave empty and the UI omits the line.
   */
  period: string
  stack: readonly TechSlug[]
  /** All three are optional: a project with no captures yet still renders. */
  logo?: string
  cover?: string
  /** Full-page screenshot shown inside the browser frame. */
  shot?: string
  link: string
}

export const projects: readonly Project[] = [
  {
    slug: 'assigns',
    title: 'Assigns',
    tagline: 'All-in-one AI platform for real estate investors.',
    description:
      'Assigns is an AI real estate platform investors use to find and comp properties, contact owners and close deals faster. I look after the whole application: the Next.js and TypeScript frontend on Vercel, the Laravel and MySQL backend on Cloudways, the deployments, and the features on top — including the AI agents built into the product.',
    // TODO(van): the years are still unknown; the role is confirmed.
    role: 'Full-Stack Developer',
    period: '',
    stack: ['nextjs', 'ts', 'laravel', 'mysql', 'tailwind', 'shadcn', 'vercel', 'cloudways', 'googlemaps'],
    logo: '/images/logo/assigns-logo.webp',
    cover: '/images/portfolio/assigns-short.webp',
    // No full-page capture yet — the cover stands in inside the browser frame.
    shot: '/images/portfolio/assigns-short.webp',
    link: 'https://assigns.com'
  },
  {
    slug: 'prop-packet',
    title: 'PropPacket',
    tagline: 'Wholesale deals turned into interactive property packets.',
    description:
      'PropPacket turns wholesale real estate deals into interactive web packets. Investors create and manage professional property packets, share the links with buyers over social, SMS or email, and track buyer interest and feedback in real time. Built on Next.js and Supabase, currently in public beta.',
    // TODO(van): confirm the engagement role and years — neither is stated anywhere yet.
    role: 'Full-stack development',
    period: '',
    stack: ['nextjs', 'supabase', 'tailwind', 'shadcn', 'googlemaps', 'vercel'],
    logo: '/images/logo/proppacket-logo.webp',
    cover: '/images/portfolio/proppacket-short.webp',
    // No full-page capture yet — the cover stands in inside the browser frame.
    shot: '/images/portfolio/proppacket-short.webp',
    link: 'https://prop-packet.vercel.app'
  },
  {
    slug: 'creator-galaxy',
    title: 'Creator Galaxy',
    tagline: 'Digital storefront for creative services, rebuilt front to back.',
    description:
      'Creator Galaxy is a digital ecommerce business that specializes in video editing, photoshop, after effects, and other related services. My job is to migrate the frontend from the blade template engine to Vue and redesign it, making the site mobile friendly and fast to load, as well as adding new functionalities to the application.',
    role: 'Frontend migration & redesign',
    period: '',
    stack: ['laravel', 'vue', 'javascript', 'php', 'sass', 'stripe', 'git', 'bootstrap', 'mysql'],
    logo: '/images/logo/creator-logo.webp',
    cover: '/images/portfolio/creator-galaxy-short.webp',
    shot: '/images/portfolio/creator-galaxy-long.webp',
    link: 'https://creatorgalaxy.com'
  },
  {
    slug: 'llh',
    title: 'Living Learning Homeschool',
    tagline: 'A school portal built from scratch for an accredited homeschool.',
    description:
      'Living Learning Homeschool is an online homeschool that offers DEPED accreditation and homeschool accountability to homeschooling families via a partner school. My job is to develop a school application from the ground up that allows them to engage with and monitor students and parents.',
    role: 'Full-stack, greenfield build',
    period: '',
    stack: ['laravel', 'vue', 'nuxtjs', 'javascript', 'php', 'sass', 'git', 'bootstrap', 'tailwind', 'mysql'],
    logo: '/images/logo/llh-logo.webp',
    cover: '/images/portfolio/llh-short-1.webp',
    shot: '/images/portfolio/llh-long.webp',
    link: 'https://llhportal.com'
  },
  {
    slug: 'loangraph',
    title: 'LoanGraphs',
    tagline: 'Home value analysis and loan comparison for sales teams.',
    description:
      'LoanGraphs is a home value analysis and loan comparison tool that assists businesses in educating their customers and closing more sales. My duty is to maintain the application running smoothly including fixing bugs, testing it, and adding new features.',
    role: 'Full-stack maintenance & features',
    period: '',
    stack: ['laravel', 'vue', 'nuxtjs', 'javascript', 'php', 'sass', 'git', 'tailwind', 'stripe', 'gmail', 'mysql'],
    logo: '/images/logo/loangraph-logo.svg',
    cover: '/images/portfolio/loangraph-short.webp',
    shot: '/images/portfolio/loangraph-long.webp',
    link: 'https://www.loangraphs.com'
  },
  {
    slug: 'vision-next',
    title: 'Vision Next',
    tagline: 'Real-time video communications with subscriptions and chat.',
    description:
      'VISION is a real-time video communications platform that allows users to create meetings, chat, group chats, and other features. My task is to maintain the application running well and to add new features such as plan subscriptions, chat systems, and more.',
    role: 'Feature development on React + AWS',
    period: '',
    stack: ['aws', 'react', 'ts', 'stripe', 'git'],
    logo: '/images/logo/vision-logo.svg',
    cover: '/images/portfolio/vision-next-short.webp',
    shot: '/images/portfolio/vision-next-long.webp',
    link: 'https://visionvideocommunications.us'
  },
  {
    slug: 'cleanafi',
    title: 'Cleanafi',
    tagline: 'Laundry scheduling, delivery and payments in one app.',
    description:
      'Cleanafi is an online laundry software that provides laundry items and delivers them to your home or office. My job is to develop an application that will allow them to manage their business, such as laundry scheduling and payment systems.',
    role: 'Full-stack, greenfield build',
    period: '',
    stack: ['laravel', 'vue', 'javascript', 'php', 'sass', 'git', 'bootstrap', 'stripe', 'mysql'],
    logo: '/images/logo/cleanafi-logo.webp',
    cover: '/images/portfolio/cleanafi-short.webp',
    shot: '/images/portfolio/cleanafi-long.webp',
    link: 'https://cleanafi.com'
  }
]
