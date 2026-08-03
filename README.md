# kyounghomin.com

Personal academic website template, served by GitHub Pages at [kyounghomin.com](https://kyounghomin.com).

> **Note:** currently filled with example data (*Gildong Hong* — a fictional person) for template review. All real content lives in `profile.js` and `cv.html`; swap the example values for your own.

## Structure

```
index.html            Homepage (template — content comes from profile.js)
profile.js            ★ All homepage content — edit only this for updates
cv.html               Editable CV source (HTML)
cv.pdf                Exported CV — this is what the site's CV button opens
favicon.svg           Site icon (vector; modern browsers)
CNAME                 Custom domain for GitHub Pages
robots.txt            Tells search engine crawlers they may index every page
.nojekyll             Tells GitHub Pages to serve files as-is (skip its Jekyll build)
assets/
  support.js          Page runtime (generated — do not edit)
  doc-page.js         Paged-document component used by cv.html
  images/
    profile.jpg       Homepage photo
    og-image.png      Social/link preview image (shown when the URL is shared)
    apple-touch-icon.png  PNG icon fallback (Safari, iOS home screen)
    eic-logo.svg, skku-logo.png
```

## Editing content

Everything on the homepage — name, links, news, publications, education, experience — lives in `profile.js`. An empty list (e.g. `experience: []`) hides its section.

## Updating the CV

1. Edit `cv.html` (commented-out sections there are ready to fill in).
2. Re-export the PDF: open `cv.html` in a browser, print, "Save as PDF", and save over `cv.pdf`.
   Or from a terminal, with a local server running (`python3 -m http.server 8123`):

   ```
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless \
     --no-pdf-header-footer --virtual-time-budget=15000 \
     --print-to-pdf=cv.pdf http://localhost:8123/cv.html
   ```

## Link preview image

`assets/images/og-image.png` (1200×630) is what chat apps and social sites show when the URL is shared. To change it (e.g. to a business card), replace that file and keep the same name and size.

## Deploying

Push to `main`. GitHub Pages serves the repository root; the custom domain is set by `CNAME` (repo *Settings → Pages* must have the domain configured once, with Source set to "Deploy from a branch").
