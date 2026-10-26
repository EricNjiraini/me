# Welcome to your Portfolio Project

## Project info

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


## Publishing an insight

The Insights library (`/insights`, plus the book covers on the home page) is built from Markdown files in `src/content/insights/`. Each file is one piece: a case study, article, report or project.

1. Copy `src/content/insights/_template.md` and rename it. The file name becomes the address: `aws-data-strategy.md` is published at `/insights/aws-data-strategy`.
2. Fill in the details at the top (title, type, date, summary and so on). The template explains each one and has a checklist for figures.
3. Write the body in Markdown. Case studies use the template's seven headings.
4. Run `npm run dev` to preview it. While the file has `draft: true`, it shows only there.
5. Delete the `draft: true` line, then commit and push. Vercel rebuilds the site and adds the piece to the sitemap and the RSS feed (`/insights/feed.xml`).

If a required field is missing or malformed, `npm run build` stops and names the file and the field.
