# ResumeAnna — Static Website

Official website for **ResumeAnna** — Resume · LinkedIn · Naukri · Career services.
Pure HTML/CSS/JS, no build step. All order buttons open WhatsApp (+91 99663 44220) with a pre-filled message.

## Pages

| File | Page |
|---|---|
| `index.html` | Landing page (hero, 3 service boxes, combo, how it works) |
| `resume.html` | Resume plans — Basic ₹299 / Premium Elite ₹499 / International ₹499 |
| `basic-resume.html` | Basic Resume designs #1–#5 |
| `premium-resume.html` | Premium Elite designs #1–#5 |
| `international-resume.html` | International designs #1–#5 |
| `linkedin.html` | LinkedIn Optimization ₹499 + Combo ₹999 |
| `naukri.html` | Naukri Optimization ₹499 + Combo ₹999 |
| `faq.html` | Frequently Asked Questions (accordion) |
| `privacy.html` | Privacy Policy |
| `terms.html` | Terms & Conditions |

## Host on GitHub Pages

1. Create a new repository on GitHub (e.g. `resumeanna`), keep it **Public**.
2. Upload **all** files & folders in this directory (`index.html`, the other `.html` files, `css/`, `js/`, `assets/`).
   The original `logo.png` and ChatGPT images in the root are source files — you don't need to upload them.
3. In the repo: **Settings → Pages → Branch: `main` → `/ (root)` → Save**.
4. Your site goes live at `https://<your-username>.github.io/resumeanna/` within a minute or two.
5. Custom domain (e.g. `resumeanna.in`): add it in the same Pages settings screen and point your domain's DNS to GitHub Pages.

## Adding your resume design images

Drop your sample images into `assets/samples/` with **exactly** these names — they appear on the site automatically (until then a neat "Design preview coming soon" placeholder shows):

```
assets/samples/basic-1.png … basic-5.png
assets/samples/premium-1.png … premium-5.png
assets/samples/international-1.png … international-5.png
```

`.jpg` also works (e.g. `basic-1.jpg`) — the site checks for `.png` first, then `.jpg`.
Recommended: portrait screenshots around 600×800 px. Tip: blur/replace personal details on samples.

## Editing common things

- **Prices / text**: edit directly in each `.html` file — everything is plain text.
- **WhatsApp number or pre-filled messages**: search for `wa.me/919966344220` across the `.html` files. The part after `?text=` is the message, URL-encoded (`%20` = space, `%E2%82%B9` = ₹, `%23` = #).
- **Support email**: search for `resumeanna.in@gmail.com`.
- **Colors**: top of `css/style.css` (`--orange`, `--ink`, `--bg`, …).
- **FAQ answers**: edit the `<details>` blocks in `faq.html` (and the shorter FAQ on `index.html`).
- **Privacy / Terms**: edit the text in `privacy.html` / `terms.html`; update the "Last updated" date near the top when you change them. These are general-purpose starting templates — have them reviewed before relying on them legally.
