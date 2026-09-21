/**
 * Single source of truth for technology labels.
 *
 * The key is the slug skillicons.dev expects (https://skillicons.dev/icons?i=<slug>);
 * the value is the human label used in badges. Adding a technology means adding
 * one entry here and referencing the slug from a skill group or a project.
 */
export const TECH = {
  html: 'HTML',
  css: 'CSS',
  sass: 'Sass',
  bootstrap: 'Bootstrap',
  tailwind: 'Tailwind',
  shadcn: 'shadcn/ui',
  javascript: 'JavaScript',
  ts: 'TypeScript',
  vue: 'Vue',
  nuxtjs: 'Nuxt',
  react: 'React',
  nextjs: 'Next.js',
  php: 'PHP',
  laravel: 'Laravel',
  python: 'Python',
  nodejs: 'Node.js',
  mysql: 'MySQL',
  postgres: 'PostgreSQL',
  supabase: 'Supabase',
  mongodb: 'MongoDB',
  graphql: 'GraphQL',
  git: 'Git',
  aws: 'AWS',
  vercel: 'Vercel',
  cloudways: 'Cloudways',
  stripe: 'Stripe',
  googlemaps: 'Google Maps',
  gmail: 'Gmail API'
} as const

/**
 * skillicons.dev has no icon for these — it answers 200 with the same generic
 * placeholder it serves for a typo'd slug — so they render label-only.
 */
const NO_ICON = new Set<string>(['googlemaps', 'shadcn', 'cloudways'])

export type TechSlug = keyof typeof TECH

export function techLabel(slug: TechSlug): string {
  return TECH[slug]
}

/** False when skillicons.dev would only return its placeholder. */
export function hasIcon(slug: TechSlug): boolean {
  return !NO_ICON.has(slug)
}

/** Builds the skillicons.dev URL for one or more slugs. */
export function skillIcon(slugs: TechSlug | readonly TechSlug[]): string {
  const list = Array.isArray(slugs) ? slugs : [slugs]
  return `https://skillicons.dev/icons?i=${list.join(',')}`
}
