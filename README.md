# Salt & Horizon Managed Site

This folder is a standalone version of the Manus-exported beta site, prepared so it can be managed outside Manus.

## What changed
- Preserved the Manus design language, typography, colors, and layout.
- Added a normal Vite/React project structure.
- Added a data file for property cards: `src/data/properties.ts`.
- Added 54 Fairmont Drive as the first featured project.
- Included local logo/brand assets in `public/`.
- Added starter social content in `SOCIAL_CONTENT_STARTER.md`.

## How future projects are managed
Update `src/data/properties.ts` for each home: title, location, price range, photo, specs, tag, and description.

## How to publish later
1. Upload this folder to a private GitHub repo.
2. Connect the repo to Vercel or Netlify.
3. Set the build command to `npm run build`.
4. Set the publish/output folder to `dist`.

## Local development
Run:

```bash
npm install
npm run dev
```

The current environment has restricted network access, so dependencies may need to be installed on your machine or by Vercel/Netlify during deployment.
