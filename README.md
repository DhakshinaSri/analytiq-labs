# AnalytIQ Labs – Corporate Website

React + Vite website for **AnalytIQ Labs — Intelligence Beyond Numbers.**
All copy comes from the supplied Word document (`src/data/content.js`).

## Run locally (VS Code)

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build + local preview:

```bash
npm run build
npm run preview
```

## Project structure

```
index.html                 SEO meta, Open Graph, JSON-LD (Organization)
vite.config.js             base: './'  (relative URLs -> works on any path)
scripts/prerender.mjs      writes one HTML file per page + sitemap.xml
public/                    favicon, robots.txt, 404.html, .nojekyll
src/
  main.jsx                 router setup (auto-detects the /repo-name/ folder)
  App.jsx                  layout, skip link, routes, focus/scroll handling
  data/content.js          ALL website text + images (edit copy here)
  data/routes.js           page titles, meta descriptions, navigation
  components/              Header, Footer, Seo, Button, CtaBand, ContactForm ...
  pages/                   Home, About, Services, Industries, WhyChoose,
                           Engagement, Privacy, Faq, Contact, NotFound
  styles/global.css        design tokens (palette), layout, components
```

## Deploying to GitHub Pages (fixes the earlier 404)

**Why the old demo showed 404:** project sites live at
`https://username.github.io/repo-name/`, but a default Vite/React build assumes it
lives at the domain root (`/`), so the JS/CSS files and routes were requested from the
wrong place. This project avoids that:

* `base: './'` in `vite.config.js` – every asset URL is relative.
* `src/main.jsx` works out the `/repo-name/` folder automatically from where the
  script was loaded – **you never type the repo name anywhere.**
* `npm run build` pre-renders every page (`/about/`, `/services/` ...), so refreshing
  a page or opening a shared link does not 404.
* `404.html` shows a friendly page (with a working Home link) for unknown URLs.

**Why a new demo replaced the old one:** a repository named exactly
`username.github.io` is your *user site* and always owns `https://username.github.io`.
Give each demo its **own repository with a different name** (e.g. `analytiq-labs`)
and it will publish at `https://username.github.io/analytiq-labs/` without touching
anything else.

### Option A – GitHub Actions (automatic)
1. Push this project to a new repo (not named `username.github.io`).
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Push to `main` – `.github/workflows/deploy.yml` builds and publishes.

### Option B – `gh-pages` branch from your machine
```bash
npm run deploy
```
Then Settings → Pages → Source: *Deploy from a branch* → `gh-pages` / `(root)`.

## Optional settings (`.env`, see `.env.example`)

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Public URL – adds canonical/Open Graph URLs and generates `sitemap.xml` |
| `VITE_FORM_ENDPOINT` | Where the contact form posts (e.g. a Formspree URL) |

## Accessibility & compatibility
Skip link, semantic landmarks, one `<h1>` per page, labelled form fields, visible
focus rings, keyboard-operable menu and FAQ, `aria-current` on active links, alt
text on all images, reduced-motion support, AA-contrast colours. Responsive from
320 px up; works in current Chrome, Edge, Firefox and Safari.
