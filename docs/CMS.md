# EIC Lab Content Management

The website uses Pages CMS as a visual editor for the Markdown content stored
in this repository. The website remains an Astro site, GitHub remains the
source of truth, and every saved CMS edit is recorded in Git history.

## One-time connection

1. Push `.pages.yml` to the `main` branch.
2. Open <https://app.pagescms.org/> and sign in with GitHub.
3. Install the Pages CMS GitHub App for
   `kyounghomin/kyounghomin.github.io` only.
4. Open the repository and select the `main` branch.
5. Confirm that News & updates, Photo gallery, Members, Publications, and
   Research areas appear in the editor.

The repository owner must complete the GitHub App installation. No GitHub
token or CMS secret belongs in this repository.

## Editor access

Editors should use their own GitHub accounts. Give each editor write access to
the repository, then have them sign in to Pages CMS with that account. Remove
repository access when someone no longer manages lab content.

## Publishing workflow

1. Open <https://www.kyounghomin.com/admin/>.
2. Enter the relevant collection and create or edit an item.
3. Review required fields, image selection, date, and display order.
4. Save the entry.
5. Pages CMS commits the change to `main` under the editor's identity.
6. GitHub Actions builds and deploys the updated Astro site automatically.

Deployment normally takes a few minutes. Progress is available from the
Deployment status link on the admin gateway or from the repository's Actions
tab.

## Content conventions

- News summaries should be one or two concise sentences.
- News can include an optional full story and up to 10 slideshow images. Add
  slideshow images through the News images field; their selected order is their
  display order in the pop-up.
- Use descriptive filenames for news images and prefer landscape images when
  possible. Portrait images are shown in full without cropping.
- Member portraits should be square. Aim for at least 1200 x 1200 pixels.
- Gallery images should be landscape 4:3. Aim for at least 1600 x 1200 pixels.
- Prefer WebP or optimized JPEG files and keep individual images below 2 MB.
- Use display order only to arrange entries within the same role, year, or
  section. Lower numbers appear first.
- Feature only the strongest gallery images in the home page carousel.
- Leave optional fields empty instead of entering placeholder text or `#`.

## Recovery

Every edit is a Git commit. If an entry is changed or deleted accidentally,
restore the previous version through GitHub's file history or revert the CMS
commit. Do not force-push `main`.

## Local validation

Before publishing configuration or template changes, run:

```sh
npm run build
```

Content editors do not need to run the site locally for normal CMS updates.
