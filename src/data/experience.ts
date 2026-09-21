/**
 * TODO(van): still no employers or dates — nothing here is invented. The bio in
 * site.ts now claims 6 years, but the per-track split behind that number is not
 * known, so the duration labels were removed rather than guessed; only the
 * published paper keeps a `meta`, because its date is a fact. Replace these
 * entries with real roles/companies/dates when you have them; the component
 * renders whatever is in this array.
 */
export interface ExperienceEntry {
  title: string
  /** Optional right-hand label — a date or venue, never a guessed duration. */
  meta?: string
  description: string
  focus: readonly string[]
}

export const experience: readonly ExperienceEntry[] = [
  {
    title: 'Full-Stack Developer',
    meta: 'Assigns.com',
    description:
      'Assigns is an AI real estate platform investors use to find and comp properties, contact owners and close deals. I am responsible for the application end to end — the Next.js and TypeScript frontend, the Laravel and MySQL backend, the deployments across Vercel and Cloudways, and the feature work on top of it, including the AI agents built into the product.',
    focus: [
      'Next.js & TypeScript',
      'Laravel & MySQL',
      'AI agents',
      'Google Maps',
      'Vercel & Cloudways'
    ]
  },
  {
    title: 'Frontend Development',
    meta: 'Peiso',
    description:
      'Interfaces in Vue, Nuxt, pulling server-rendered templates apart into component-driven frontends, and keeping what replaces them fast on a phone and readable as it grows.',
    focus: ['Vue & Nuxt', 'React & Next.js', 'Design systems', 'Responsive UI']
  },
  {
    title: 'Backend Development',
    meta: 'LoanGraphs',
    description:
      'The services behind those interfaces, in Laravel, Node and Supabase: authentication and access control, scheduling, subscription billing, and the data models the whole thing rests on.',
    focus: ['Laravel', 'Node.js', 'REST & GraphQL', 'MySQL & PostgreSQL']
  },
  {
    title: 'Full-Stack Developer',
    meta: 'Living Learning Homeschool',
    description:
      'Owning applications end to end — greenfield builds for a school portal and a laundry platform, real estate tooling in Nuxt.js, and the unglamorous half after launch: feature work, bug triage and keeping live products healthy.',
    focus: ['Laravel', 'Vue & Nuxt', 'MySQL', 'Boostrap']
  },
  {
    title: 'Published Research',
    meta: '2023 · IJETAE',
    description:
      'Primary author of an OCR-based hybrid image text summarizer, pairing the Luhn algorithm with finetuned transformer models to condense long documents.',
    focus: ['Python', 'OCR', 'Transformers', 'Summarization']
  }
]
