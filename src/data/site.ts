export const site = {
  name: 'Van Zachary Singco',
  shortName: 'VZS',
  initials: 'VZ',
  role: 'Full-Stack Web Developer',
  available: true,
  tagline:
    'I design and build web applications end to end from the interface people use to the APIs and database behind it.',
  intro: [
    'I’m a Full-Stack Web Developer with 6 years of experience building scalable, user-focused web applications and SaaS products.',
    'I work across the full development lifecycle from responsive frontend experiences to the APIs, database architecture, third-party integrations, payment systems, and production deployments behind them.',
    'I have hands-on experience with SaaS development, REST APIs, Stripe integrations, authentication systems, cloud-based applications, automation, and AI-powered features.',
    'I’m actively incorporating AI and agentic development into my workflow. I use Claude Code regularly to understand complex codebases, plan implementations, debug issues, refactor code, and review changes accelerating delivery while maintaining code quality.',
    'I enjoy solving complex technical problems, improving existing systems, and turning business requirements into practical, reliable software.',
    'I’m continuously expanding my knowledge in AI agents, LLM integrations, automation, SaaS architecture, and modern full-stack development.'
  ]
} as const

export const contact = {
  email: 'vanzachary19@gmail.com',
  phone: '+63 951-8185-647',
  phoneHref: 'tel:+639518185647',
  github: 'https://github.com/VanSingco',
  githubHandle: 'VanSingco'
} as const

/** EmailJS keys are publishable by design; lock the domain down in the EmailJS dashboard. */
export const emailjsConfig = {
  serviceId: 'service_73ce1np',
  templateId: 'template_ib87bz4',
  publicKey: 'fkvf1l_Vkj7qfRBLM'
} as const

export const paper = {
  title:
    'OCR-based Hybrid Image Text Summarizer using Luhn Algorithm with Finetune Transformer Models for Long Document',
  role: 'Primary Author',
  venue: 'IJETAE',
  year: '2023',
  abstract:
    'The main purpose of this research is to assist readers in speeding up the process of digitalizing and summarizing the image document by allowing them to digitalize and summarize the text from the image in the system.',
  link: 'https://www.researchgate.net/publication/367944125_OCR-based_Hybrid_Image_Text_Summarizer_using_Luhn_Algorithm_with_Finetune_Transformer_Models_for_Long_Document',
  pdf: '/pdf/IJETAE_0223_07.pdf'
} as const

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' }
] as const
