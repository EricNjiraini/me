# ericnjiraini.com

Source for [ericnjiraini.com](https://ericnjiraini.com), the portfolio of Eric Njiraini, Data Analytics Manager in Nairobi.

## Stack

- Vite, React and TypeScript
- Tailwind CSS with shadcn/ui components
- Every page is prerendered to static HTML at build time (`scripts/prerender.mjs`), so search engines and link previews see the full content
- Hosted on Vercel, which deploys every push to `main`
- Contact form through Formspree; visitor counts through Vercel Web Analytics

## Run it locally

You need Node.js and npm.

```sh
npm install
npm run dev      # development server with live reload
npm run build    # production build into dist/, including the prerendered pages
npm run preview  # serve the production build
```


## Publishing an insight

The Insights library (`/insights`, plus the book covers on the home page) is built from Markdown files in `src/content/insights/`. Each file is one piece: a case study, article, report or project.

1. Copy `src/content/insights/_template.md` and rename it. The file name becomes the address: `aws-data-strategy.md` is published at `/insights/aws-data-strategy`.
2. Fill in the details at the top (title, type, date, summary and so on). The template explains each one and has a checklist for figures.
3. Write the body in Markdown. Case studies use the template's seven headings.
4. Run `npm run dev` to preview it. While the file has `draft: true`, it shows only there.
5. Delete the `draft: true` line, then commit and push. Vercel rebuilds the site and adds the piece to the sitemap and the RSS feed (`/insights/feed.xml`).

If a required field is missing or malformed, `npm run build` stops and names the file and the field.
