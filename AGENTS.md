# Notes for Claude

Personal site for Finley Desai. Astro 7 + Tailwind 4, static output, deployed
to GitHub Pages at https://fwdesai.github.io.

## Conventions

- **Zero client JS.** No framework integrations are installed and the build
  currently emits no `.js` files. Keep it that way unless something genuinely
  needs interactivity — check with `find dist -name '*.js'` after a build.
- **No Markdown / content collections.** Finley explicitly does not want a
  Markdown authoring workflow. Content lives in plain JS data files under
  `src/data/`, and pages are `.astro`.
- **Content is data, not markup.** Project copy belongs in
  `src/data/projects.js`; site-wide strings belong in `src/data/site.js`.
  Adding a project should never require a new page file — `[slug].astro`
  generates one per data entry.
- **Design tokens** are the `@theme` block in `src/styles/global.css`. Use the
  generated utilities (`text-ink`, `bg-tint`, `border-rule`, `text-accent`)
  rather than hard-coded hex values or stock Tailwind palette colors.
- **User site**, so `base` is `/`. Absolute paths like `/projects` are correct.

## Before saying a change works

```bash
npm run build && npm run preview
```

The Astro dev server resolves some paths that 404 in the real build, so a
passing `npm run dev` is not sufficient evidence.

## Resume page

The resume renders as an image (`public/resume-preview.webp`) plus top-level
"Open PDF" / "Download" links. Do not switch this to an embedded `<iframe>` —
iOS Safari freezes embedded PDFs on page 1 and Chrome on Android often renders
nothing in a subframe. Regenerate the image with `./scripts/render-resume.sh`.

## Deploy

Push to `main`; `.github/workflows/deploy.yml` handles the rest. Action
versions were current as of 2026-08-16: `actions/checkout@v7`,
`withastro/action@v6`, `actions/deploy-pages@v5`. Verify against the GitHub
API before bumping — most tutorials online are a major version behind.
