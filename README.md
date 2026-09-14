# Backend Developer Portfolio

A lightweight, responsive personal portfolio built with plain HTML, CSS,
and JavaScript — no frameworks, no build step. Positioned around backend
development with C#, .NET, ASP.NET Core, and SQL Server.

## Overview

- **Sections:** Home / Hero, About, Technical Skills, Soft Skills,
  Training & Professional Development, Projects, Internships &
  Experience, Contact.
- **Tech stack:** HTML5, CSS3 (variables, Flexbox, Grid), vanilla
  JavaScript (ES5-compatible, no build tools required).
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono
  (small labels/dates), loaded from Google Fonts.

## Project structure

```
portfolio/
├── index.html              All page markup and content placeholders
├── css/
│   ├── style.css           Design tokens (colors, type, spacing), base styles, layout
│   ├── components.css      Buttons, pills, cards, carousel, form
│   └── responsive.css      Tablet and mobile breakpoints
├── js/
│   ├── navigation.js       Mobile menu, scroll-spy, nav background
│   ├── animations.js       Scroll-reveal effect (skipped if reduced motion is on)
│   ├── projects.js         Project data array + carousel rendering
│   └── main.js             Footer year, contact form handling
├── assets/
│   ├── images/
│   │   ├── profile/        Your profile photo goes here
│   │   └── projects/       Your project screenshots go here
│   ├── icons/               Favicon
│   └── fonts/               (empty — fonts are loaded from Google Fonts by default)
└── README.md
```

## How to run it

No build step needed. Either:

- Open `index.html` directly in a browser, or
- Serve the folder locally for the most accurate behavior, e.g.:
  ```
  npx serve portfolio
  ```
  or
  ```
  python3 -m http.server --directory portfolio 8000
  ```

## How to edit your content

Every place that needs real information is marked with an HTML or JS
comment like:

```html
<!-- =========================================
     CONTACT EMAIL
     Replace with your actual professional email.
     ========================================= -->
```

Search `index.html` and `js/projects.js` for the word `Replace` or
`placeholder` to find every spot that still needs your real data.

### Name, title, and hero text
Edit directly in `index.html` inside `<section class="hero">` and the
`<title>` / `<meta name="description">` tags in `<head>`.

### Profile image
Add your photo to `assets/images/profile/profile.jpg` (same filename).
If the file is missing, the hero shows a text placeholder instead of a
broken image.

### Technical skills / Soft skills
Edit the `<span class="pill">` and `<div class="skill-card">` elements
inside `<section id="skills">` in `index.html`. Add or remove items
freely — the layout adjusts automatically.

### Training
Each training item is one `<article class="training-card">` block inside
`<section id="training">`. Copy the block (including the comment above
it) to add another training entry, or delete a block to remove one.

### Internships & Experience
One `<article class="experience-card">` block per role, inside
`<section id="experience">`. If you have no experience yet, delete the
`<article>` block and keep (or remove) the note below it.

### Projects
Edit the `projects` array at the top of `js/projects.js` — one object
per project:

```js
{
  title: 'PROJECT NAME',
  description: 'Short description...',
  image: 'assets/images/projects/project-1.jpg',
  tech: ['C#', 'ASP.NET Core'],
  github: '#',      // real repository URL
  demo: null        // real live URL, or null to hide the Live Demo button
}
```
Add project images to `assets/images/projects/` with matching filenames.
The carousel and card markup are generated automatically from this array
— you do not need to touch the HTML for new projects.

### Contact info
Edit the email, phone, location, GitHub, and LinkedIn entries inside
`<section id="contact">` in `index.html`. The same email should also be
updated in `js/main.js` (`const to = '...'`) so the contact form opens
the right mail client address.

### Social links (hero + contact)
GitHub, LinkedIn, and WhatsApp links appear in two places: the hero
socials row and the contact info cards. Update the `href="#"` values in
both places in `index.html`.

## How to change the colors

All colors are defined as CSS variables at the top of `css/style.css`:

```css
:root {
  --bg: #08070c;
  --surface: #121018;
  --primary-color: #7c4dff;
  --primary-light: #b39bff;
  --text-color: #f3f1f8;
  --muted-text-color: #9691a4;
  ...
}
```
Changing these values re-themes the entire site — no need to touch any
other file.

## Deployment

This is a fully static site, so it can be deployed anywhere that serves
static files, for example:

- **GitHub Pages:** push the `portfolio/` contents to a repo and enable
  Pages on the `main` branch (root or `/docs` folder).
- **Netlify / Vercel:** drag-and-drop the folder or connect the repo;
  no build command is required (or set the build output directory to
  the project root).
- **Any static host:** upload the contents of `portfolio/` as-is.

## Notes

- The contact form currently opens the visitor's email client via a
  `mailto:` link (see `js/main.js`). Replace this with a real backend or
  form service (e.g. Formspree, a serverless function) if you want
  submissions handled without opening the visitor's mail app.
- Animations respect `prefers-reduced-motion` and are intentionally
  restrained — mainly a single fade/slide reveal per section.
- No external JS libraries are used; everything is vanilla JavaScript.
