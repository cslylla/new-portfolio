# Portfolio

A responsive, high-end portfolio website showcasing professional experience in customer-facing engineering, integrations, automation, and technical delivery.

**Context:** This project was built as part of [Codecademy's AI Maker Bootcamp](https://www.codecademy.com/) — a program focused on building AI-assisted development skills and creating production-ready web applications.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Language:** TypeScript

---

## Features

- **Sticky navbar** with smooth scroll navigation
- **Hero section** with professional photo and CTAs
- **Expertise section** with bento-style cards (Integrations, Debugging, Customer Delivery, Languages) plus Developer Tools and Computer Skills
- **Experiences section** with work history, extracurricular activities, and LinkedIn link
- **Certifications** in a yellow card layout
- **Projects grid** (9 projects) with click-to-open modals
- **Connect section** with social links and developer illustration
- **Footer** with social icons and GitHub credit
- **SEO:** Meta tags, Open Graph, Twitter cards, sitemap, robots.txt
- **Accessibility:** ARIA labels, semantic HTML, keyboard navigation

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata
│   ├── page.tsx        # Home page
│   ├── globals.css     # Design tokens, Tailwind theme
│   ├── sitemap.ts      # Dynamic sitemap
│   └── robots.ts       # robots.txt
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Expertise.tsx
│   ├── Experiences.tsx
│   ├── Certifications.tsx
│   ├── Projects.tsx
│   ├── ProjectModal.tsx
│   ├── Connect.tsx
│   └── Footer.tsx
├── data/
│   └── projects.ts     # Project data and images
└── images/
```

---

## Design Tokens

- **Canvas:** `#dfe0df` (Main White)
- **Primary Text:** `#402e32` (Main Brown)
- **Accent:** `#dba11c` (Accent Gold)
- **Fonts:** Candal (headings), Cabin (body)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn, pnpm)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables (Optional)

Create a `.env.local` file to customize the site URL for metadata and sitemap:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Deploy on Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add `NEXT_PUBLIC_SITE_URL` in project settings if needed
4. Deploy

---

## License

This project is licensed under the [MIT License](LICENSE). Built by [cslylla](https://github.com/cslylla).
