# hejkohi

Simple site shell for `hejkohi` with a root landing page and a working business-plan draft.

## What is in here

- `index.html`: centered `hej` logo linking to `hejrafa.com`
- `business-plan/index.html`: working business-plan draft
- `styles.css`: shared styling for the root page and business-plan page
- `assets/`: visual assets derived from the updated brand guide
- `references/`: source PDFs and Affinity file used as reference material

## Local preview

From the repo root:

```bash
python3 -m http.server 4174
```

Then open:

```text
http://localhost:4174/
```

## Current scope

Current structure:

- root homepage with centered `hej` mark
- `/business-plan/` route with the content draft
- redirects from the older stub pages into `/business-plan/`

The business-plan content is still a draft. Founder story, city-specific market research, and a defensible financial model still need another pass before it is investor-ready.
