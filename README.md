# Athenkosi Fadana — Portfolio

Personal portfolio website built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## About

The portfolio presents Athenkosi Fadana as a Computer Science & Biochemistry graduate with interests in software development, IT support, cloud technologies and cybersecurity.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint   # ESLint (next/core-web-vitals)
npm run build  # production build
```

## Deploy

Push the repository to GitHub and import it into Vercel. Vercel detects Next.js automatically.

## Personalisation

- `data.ts` — all site content: profile, navigation, projects, skills, experience, education and certificates
- `app/page.tsx` — section order and layout
- `components/` — Nav, Hero, Projects, Contact and the Reveal scroll-motion primitives
- `public/profile.jpeg` — profile photo
- `public/Athenkosi-Fadana-CV.pdf` — CV
- `public/thumbs/` — project thumbnails (WebP)
- `public/certificates/` — certificate PDFs, each linked from the Certificates section
