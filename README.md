# Developer Portfolio (React + Tailwind CSS)

Dark-first portfolio with light mode, project showcase, CV download and contact form.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```
Requires Node.js 18 or newer.

## Make it yours

1. Edit `src/data/portfolio.js`: name, email, links, about text, skills and projects.
2. Replace `public/cv.pdf` with your CV (keep the file name, or change `cvUrl`).
3. Update the `<title>` in `index.html`.
4. Add `repo` and `live` links to each project. Buttons appear only when a link is set.

## Contact form

- Without setup, the form opens the visitor's email app with the message filled in.
- For real submissions: create a free form at https://formspree.io, copy `.env.example` to `.env`
  and set `VITE_FORMSPREE_ID=yourFormId`. Restart `npm run dev`.

## Colours and fonts

Colour tokens live in `src/index.css` (`:root` for light, `.dark` for dark).
Change `--accent` to restyle the whole site. Fonts are set in `index.html` and `tailwind.config.js`.

## Deploy

- Vercel or Netlify: import the GitHub repo. Build command `npm run build`, output folder `dist`.
  Add `VITE_FORMSPREE_ID` in the host's environment variables.
