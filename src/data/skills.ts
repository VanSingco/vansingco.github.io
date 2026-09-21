import type { TechSlug } from './tech'

export interface SkillGroup {
  title: string
  description: string
  items: readonly TechSlug[]
}

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Interfaces that stay fast and readable as they grow.',
    items: ['html', 'css', 'sass', 'javascript', 'ts', 'vue', 'nuxtjs', 'react', 'nextjs']
  },
  {
    title: 'Backend',
    description: 'APIs, auth, billing and the plumbing behind them.',
    items: ['php', 'laravel', 'nodejs', 'python', 'graphql', 'googlemaps']
  },
  {
    title: 'Data & Infra',
    description: 'Storage, queries and the services around them.',
    items: ['mysql', 'postgres', 'supabase', 'mongodb', 'aws', 'vercel', 'stripe']
  },
  {
    title: 'Styling & Tooling',
    description: 'Design systems and the day-to-day workflow.',
    items: ['tailwind', 'bootstrap', 'git']
  }
]

export const allSkills: readonly TechSlug[] = skillGroups.flatMap((group) => group.items)
