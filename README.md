# vansingco.github.io

Personal portfolio for **Van Zachary Singco** — Full-Stack Web Developer.

Live at **https://vansingco.github.io/**

## Stack

| | |
|---|---|
| Framework | Vue 3.5 (`<script setup>`, TypeScript) |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) |
| Components | [shadcn-vue](https://www.shadcn-vue.com) on [Reka UI](https://reka-ui.com) |
| Icons | inlined Lucide outlines (`src/components/icons/`) |
| Toasts | `vue-sonner` |
| Contact form | EmailJS |

Single scrolling page, dark theme only, no router.

The hero shows a live GitHub contribution graph, fetched client-side from
[github-contributions-api](https://github-contributions-api.jogruber.de) (no token needed)
and themed with the site's own colours. It degrades to a profile link if the endpoint is down.

## Development

```sh
npm install
npm run dev          # http://localhost:5173
npm run type-check   # vue-tsc --build — the only automated gate
npm run build        # type-check + production build into dist/
npm run preview      # serve the built dist/ locally
```

## Editing content

Content is data, not markup — nothing below requires touching a component:

| What | Where |
|---|---|
| Bio, contact details, nav, paper, EmailJS IDs | `src/data/site.ts` |
| Projects (copy, stack, links, images) | `src/data/projects.ts` |
| Skill groups | `src/data/skills.ts` |
| Experience timeline | `src/data/experience.ts` |
| Technology slugs → labels | `src/data/tech.ts` |

Technology icons are resolved remotely by [skillicons.dev](https://skillicons.dev); the
key in `tech.ts` is the slug that service expects.

### Adding a project

1. Drop the full-resolution logo / cover / full-page screenshot into `assets-src/images/`.
2. Run `bash scripts/optimize-images.sh` to regenerate the published WebP in `public/images/`.
3. Append an entry to `projects.ts`.

Images are served as WebP capped at 1200px wide — the originals in `assets-src/`
are 21.4 MB, the published set is 1.2 MB. `assets-src/` is never published.

### Adding an icon

Icons are inlined rather than pulled from the ~3,700-file Lucide package. Add the
name to the `STROKED` map in `scripts/build-icons.mjs`, then:

```sh
node scripts/build-icons.mjs
```

### Adding a shadcn-vue component

```sh
npx shadcn-vue@latest add <component>
```

Then rewrite any generated `from 'lucide-vue-next'` import to `from '@/components/icons'`.

## Deployment

GitHub Pages serves the **`gh-pages` branch root**, so publishing means putting the
*contents* of `dist/` there:

```sh
npm run build
git add -f dist                       # dist/ is gitignored but tracked on main
git commit -m "Rebuild"
git subtree push --prefix dist origin gh-pages
```

`vite.config.ts` sets `base: './'` so asset URLs stay relative, and `public/.nojekyll`
stops Jekyll from swallowing hashed asset filenames.
