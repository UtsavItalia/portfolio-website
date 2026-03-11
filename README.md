# AI/ML Engineer Portfolio — Next.js + TypeScript + TailwindCSS

A production-ready, SEO-optimized portfolio for AI/ML engineers built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

---

## Folder Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout + ThemeProvider + SEO metadata
│   ├── page.tsx                # Home page (hero, stats, featured projects)
│   ├── globals.css             # CSS variables for dark/light theme + component styles
│   ├── about/
│   │   ├── page.tsx            # About page (server component, SEO metadata)
│   │   └── AboutClient.tsx     # About client component (timeline, bio, links)
│   ├── projects/
│   │   └── page.tsx            # Projects page with category filter (ML / AI App / MERN)
│   ├── skills/
│   │   └── page.tsx            # Skills page with animated progress bars
│   ├── certifications/
│   │   └── page.tsx            # Certifications + ongoing courses
│   └── contact/
│       └── page.tsx            # Contact form with validation
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with dark/light toggle + mobile menu
│   │   └── Footer.tsx          # Footer with social links, navigation
│   └── ui/
│       └── ProjectCard.tsx     # Reusable project card (title, desc, results, tech, links)
│
├── lib/
│   └── data.ts                 # All content: projects, skills, certifications
│
├── public/
│   └── images/                 # Project screenshots (add your own)
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS v4 + CSS variables |
| Animations | Framer Motion |
| Icons | Lucide React |
| Theme | next-themes (dark/light) |
| Fonts | Syne (display) + Space Mono (code) + DM Sans (body) |

---

## Features

- **Dark/Light Mode** — CSS variable-based theming with smooth transitions
- **SEO Optimized** — Full metadata API, Open Graph, Twitter cards per page
- **Responsive** — Mobile-first design, collapsible navbar with slide-in menu
- **Project Filtering** — Filter by Machine Learning / AI Web App / MERN Stack
- **Animated Skills** — IntersectionObserver-triggered progress bars
- **Typing Animation** — Hero typewriter effect cycling through role titles
- **Framer Motion** — Smooth page transitions and scroll-triggered animations
- **Contact Form** — Validation, loading state, success confirmation

---

## Customization

### 1. Update Personal Info
Edit `lib/data.ts`:
```ts
export const personalInfo = {
  name: "Your info",
  email: "Your email",
  github: "https://github.com/{your github}",
  // ...
};
```

### 2. Add Your Projects
Each project in `lib/data.ts` supports:
```ts
{
  id: "unique-id",
  title: "Project Title",
  description: "Short description",
  longDescription: "Full description",
  category: "Data Analytics" | "Machine Learning" | "AI Web Application" | "AI Web Application" | "NLP" | "Full Stack" | "MLOps",
  techStack: ["Python", "PyTorch", ...],
  github: "https://github.com/...",
  demo: "https://your-demo.com",
  results: ["99% accuracy", "10M requests/day", ...],
  featured: true,
  year: 2024,
}
```

### 3. Add Profile Photo
Place your photo at `public/images/avatar.jpg` and update `AboutClient.tsx` to use `<Image>` instead of the initials placeholder.

### 4. Add Resume
Place your PDF at `public/resume.pdf`.

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

---

## Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from project root
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

### Option 3: Vercel Dashboard

1. Zip the `portfolio/` folder (without `node_modules` and `.next`)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag and drop the folder

### Environment Variables (if adding a backend contact form)

In Vercel dashboard → Settings → Environment Variables:

```
RESEND_API_KEY=your_api_key        # For email with Resend
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

---

## Connecting a Real Contact Form

Replace the `handleSubmit` mock in `app/contact/page.tsx`:

```ts
// Install: npm install resend
import { Resend } from 'resend';

// app/api/contact/route.ts
export async function POST(req: Request) {
  const body = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'you@example.com',
    subject: `Portfolio contact: ${body.subject}`,
    text: `From: ${body.name} (${body.email})\n\n${body.message}`,
  });

  return Response.json({ success: true });
}
```

## Performance

- Static generation for all pages (SSG)
- Font optimization with Google Fonts preload
- Zero layout shift (CSS variable theming)
- Framer Motion tree-shaking
- Image optimization via Next.js `<Image>`
