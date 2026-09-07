# MORPIXEL DESIGNLAB Website

Static responsive website for **MORPIXEL DESIGNLAB (OPC) PRIVATE LIMITED**.

## GitHub Pages deployment

1. Create a GitHub repository, e.g. `morpixel-website`.
2. Upload all files in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` branch and `/ (root)` folder.
6. Save.
7. In your domain DNS provider, point `morpixel.in` to GitHub Pages using GitHub's current DNS instructions.
8. In GitHub Pages settings, set the custom domain to `morpixel.in` and enable HTTPS after DNS verifies.

## Important before publishing

- Replace `hello@morpixel.in` if you use a different email address.
- Add registered office address only if you want it public.
- MINDWALL is intentionally labelled **In Development** to avoid presenting unbuilt functionality as already launched.
- The logo asset is in `assets/morpixel-logo.png`.

## Files

- `index.html` — complete site content
- `styles.css` — responsive design and visual system
- `script.js` — mobile menu, header state and scroll reveal
- `assets/morpixel-logo.png` — MORPIXEL logo
- `CNAME` — custom domain for GitHub Pages
