# EveryBodyKinks

A single-page educational website for EveryBodyKinks.

## Publish with GitHub Pages

1. Create a new GitHub repository. For example: `everybodykinks.github.io` or `everybodykinks`.
2. Upload **all files in this folder** to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Save. GitHub will publish the site and provide its Pages URL.

No build system, Node.js, or server is required. This is intentionally a plain HTML/CSS/JavaScript site so GitHub Pages can serve it directly.

## Custom domain

If you later want something like `education.example.com`, add the domain under **Settings → Pages → Custom domain**. GitHub will provide the DNS instructions. A `CNAME` file can also be added to the repository if you prefer to manage it manually.

## Files

- `index.html` — main webpage
- `styles.css` — responsive visual theme
- `script.js` — mobile navigation and footer year
- `.nojekyll` — tells GitHub Pages not to run Jekyll processing
- `README.md` — publishing instructions

## Editing content

The page is organized into:
- About
- Approach / philosophy
- Topics
- Workshops
- Connect / social links

Social links currently point to:
- https://x.com/EveryBodyKinks
- https://www.instagram.com/everybodykinks/

The Google Fonts import is optional; if you want the site to work without external font requests, remove the Google Fonts `<link>` tags from `index.html` and the site will fall back to system fonts.
