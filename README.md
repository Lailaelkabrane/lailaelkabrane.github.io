# Dashboard portfolio (Next.js)

Desktop-dashboard style portfolio: left menu, white cards, flat colours (no gradients).

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out, host anywhere (Vercel, Netlify, GitHub Pages)
```

`npm audit` may list warnings about Next.js image optimiser, server actions and similar server features.
This site is a static export and uses none of them.

## Edit content

Everything lives in `data/portfolio.ts`: profile, contact details, KPIs, skills, studies, internships, projects.

* Photo: replace `public/images/laila.jpg` or change `profile.photo`.
* CV: replace `public/Laila_El_Kabrane_CV.pdf`.
* Skill levels (1 to 5) are self-assessed guesses, adjust them honestly.
* Rows marked `confirm: true` in a project stack are best guesses. They show a red "to confirm" tag on the site. Correct the text, then delete the `confirm` line.

## Add a project

1. Put images in `public/projects/<slug>/` (and a video as `.mp4` if wanted).
2. Copy one object in `projects` inside `data/portfolio.ts`, change `slug`, text, numbers, `pipeline`, `stack` and `media`.
3. Optional `charts` array draws bar or donut charts from your numbers (see Subul IN for examples).

The project page is generated automatically: highlights, KPI tiles, pipeline, charts, gallery with video, and a table of tools and what each was used for.

## Style

Colour tokens are at the top of `app/globals.css` (`--purple`, `--cyan`, `--red`, `--bg`).

## Add a page

1. Create `app/<name>/page.tsx` (copy `app/skills/page.tsx`).
2. Add an entry to the `items` list in `components/Sidebar.tsx`.
