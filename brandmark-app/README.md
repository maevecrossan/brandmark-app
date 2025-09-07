This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---
## Planning
### Client Brief
The following is the brief submitted by the client.

[Brandmark Website Brief](/brandmark-app/public/assets/Brandmark%20Website%20Brief%20REVISED.pdf)

#### Client MVP Agreement
Some suggested features were outside the scope of the original agreement, and so the client agreed some features in the brief should be dropped. The following two features were not included in the MVP:
    - CMS integration
    - Visible Instagram feed

All other requested features were included.

#### Target Audience

As the website owner, I...

    - Want brand assets (logos, imagery, copy) to be presented consistently and credited appropriately.
    - Want to showcase recent projects and tradeshow activity to build retailer confidence.
    - Want retailers to find opening hours, location, and contacts quickly to arrange showroom visits.
    - Want to reduce spam whilst remaining contactable, hence email and telephone obfuscation.
    - Want the site to be fast, mobile‑friendly, and accessible to widen reach and professionalism.
    - Want styling and typography to reflect Brandmark’s identity with a clean, modern feel.
    - Want a lightweight setup.
    - Want a clear structure so new brand pages can be added consistently with galleries and credits.

As a brand owner, I...

    - Want to ensure my brand is represented consistently with approved assets and messaging.
    - Want my content (copy, logos, imagery) to be used appropriately with correct credits.
    - Want an Irish‑market facing page I can share with retailers.

As a new brand, I...

    - Want to learn who Brandmark are, their values, and experience in the Irish market.
    - Want to review the current portfolio to assess complementarity and potential conflicts.
    - Want evidence of execution (case studies, tradeshows) to validate capability.
    - Want to know how to start a conversation about representation and next steps.
    - Want assurance my brand will be presented with care and professionalism.


### Wireframes

---
## Features

### Components 
- Navbar: Sticky, responsive navigation with mobile menu toggle, active-route highlighting via `usePathname`, accessible labelling, and subtle glass/blur styling.
- Hero Carousel: Client-side fading carousel with timed rotation, responsive `next/image`, optional placeholders, and gradient overlays for legibility.
- Footer: Full contact block with client-side email and telephone obfuscation (spam resistant), social links (Instagram, LinkedIn via Font Awesome), embedded Google Map, and address deep-link to Maps.

### Homepage
- Hero with rotating brand lifestyle imagery and overlaid tagline.
- Welcome section introducing Brandmark and CTA to About.
- Brands grid showcasing logos for Secrid, Cluse, Izipizi, Chipolo, Estella Bartlett, Eat My Socks, and DOIY, with CTA to Portfolio.

### About
- Hero image, “Who We Are” intro, and “What Drives Us” value cards (Partnership, Curation, Service).
- Tradeshows section describing Showcase and Autumn Gift & Home Fair with supporting imagery.

### Portfolio
- Brand portfolio with filterable categories (multi-select chips) and responsive cards.
- Each card shows logo, short description, category badges, and deep-link to brand page.

### Brand Pages
Each brand page has the same layout.
- Secrid: Hero with credit note, concise intro, detailed “About Secrid” card, and image gallery.
- Cluse: Hero, minimalist design intro, “About CLUSE” card, and gallery.
- Izipizi: Hero, brand mission and B Corp commitment summary, and gallery.
- Chipolo: Hero and gallery placeholders with target dimensions guidance, “About Chipolo” card, and copy referencing Apple/Google Find My integration.
- Estella Bartlett: Hero, “Everyday elegance” intro, detailed about card, and gallery.
- Eat My Socks: Hero, playful gifting intro, sustainability notes, and gallery.
- DOIY: Hero, design-led intro, brand story about card, and gallery.

### Projects
- Three case studies highlighting Secrid installations: Piaggio APE feature, shop‑in‑shop build, and nationwide wall features, each with imagery and descriptions.

### Contact
- Opening hours, linked address card to Google Maps, and team contacts.
- Obfuscated emails and tel links for Lee, Lucy, and Gerry; headshots for Lee and Lucy.

### Platform & UX
- Next.js App Router with route‑based pages and a custom 404.
- Performance: Optimised images via `next/image` with `sizes`, `priority`, and quality tuning.
- Accessibility: Meaningful alt text, ARIA labels, keyboard‑friendly controls, and screen‑reader‑only credits.
- Styling: Tailwind CSS with custom theme tokens (brand colours and fonts), plus locally hosted Eurostile fonts.
- PWA basics: Web App Manifest and full favicon/touch‑icon set wired in the layout head.

---
## Credits & Resources

| Use | Resource | Notes |
|----------------------------|------------------------|----------|
| Styling | Tailwind CSS |  |
| Create favicon, web app manifest & touch icons | https://realfavicongenerator.net/ |  |
| Check functionality of favicon, web app manifest & touch icons | https://realfavicongenerator.net/favicon-checker |  |
| Extract exact brand colours from leaflet | https://imagecolorpicker.com/ |  |
| Sticky navbar template | https://flowbite.com/docs/components/navbar/#sticky-navbar |  |
| Glass effect | https://tailwindcss-glassmorphism.vercel.app/ |  |
| Font: Eurostile Condensed Regular | https://freefonts.co/fonts/eurostile-condensed-regular |  |
| Font: Eurostile Extended #2 Regular | https://freefonts.co/fonts/eurostile-extended-2-regular# |  |
| #fffcf8 | Extracted from Brandmark leaflet | *Not used* |
| #e0e2df | Extracted from Brandmark leaflet |  |
| #4b8484 | Extracted from Brandmark leaflet |  |



<!-- ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
