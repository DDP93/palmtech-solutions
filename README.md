# PalmTech Solutions

Marketing website for PalmTech Solutions — automation, AI systems, web development, and school technology solutions.

Built with **Vite + React + Tailwind CSS**. Deploys to Vercel or Netlify with zero extra configuration.

## Run locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server at http://localhost:5173
npm run build    # create a production build in /dist
npm run preview  # preview the production build locally
```

## Before you go live

Open `src/App.jsx` and update the contact details in the **Contact** section:

- The `mailto:` email (`hello@palmtechsolutions.co.za`)
- The WhatsApp number (`https://wa.me/27000000000` — use full international format, no `+` or spaces)

## Deploy

### Option A — Vercel
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New… → Project** → import the repo.
3. Vercel auto-detects Vite. Build command `npm run build`, output `dist`. Click **Deploy**.

### Option B — Netlify
1. Push this folder to a GitHub repository.
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
3. Settings are read from `netlify.toml` (build `npm run build`, publish `dist`). Click **Deploy**.

> No GitHub? On Netlify you can also drag the `dist` folder (after `npm run build`) straight onto the dashboard. On Vercel you can run `npx vercel` from this folder.

## Project structure

```
palmtech-solutions/
├── index.html          # HTML shell + SEO meta tags + fonts
├── public/favicon.svg  # site icon
├── src/
│   ├── App.jsx         # the entire website
│   ├── main.jsx        # React entry point
│   └── index.css       # Tailwind + global styles
├── tailwind.config.js
├── vite.config.js
├── netlify.toml        # Netlify build + SPA redirects
└── vercel.json         # Vercel SPA rewrites
```
