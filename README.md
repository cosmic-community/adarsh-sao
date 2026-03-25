# Adarsh Sao — Performance Marketing Portfolio

![App Preview](https://imgix.cosmicjs.com/f78fc480-2813-11f1-bad2-97a3b964e8e2-autopilot-photo-1573496359142-b8d87734a5a2-1774420164781.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A premium, agency-level digital marketing portfolio showcasing real campaign results, case studies, and performance marketing expertise. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com/docs) CMS.

## Features

- 🎯 **Results-Driven Design** — Bold stats, case study breakdowns, and measurable outcomes front and center
- 🌑 **Dark + Emerald Theme** — Premium color palette conveying trust and authority
- 📱 **Fully Responsive** — Pixel-perfect on mobile, tablet, and desktop
- ⚡ **Fast Loading** — Server-side rendering with Next.js 16 App Router
- 🔍 **SEO Optimized** — Proper meta tags, semantic HTML, and structured content
- 🎨 **Smooth Animations** — CSS transitions and scroll-based reveals
- 📊 **Dynamic Content** — All sections powered by Cosmic CMS
- 💼 **Case Studies** — Full campaign breakdowns with objectives, strategies, and results
- 🛠️ **Skills Grid** — Categorized skills with visual badges
- 📋 **Work Timeline** — Career progression with key metrics
- 🎓 **Credentials** — Certifications and education
- 💬 **Testimonials** — Client feedback with star ratings
- 📬 **Contact Section** — Email, LinkedIn, phone with strong CTAs

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: [Cosmic](https://www.cosmicjs.com/docs)
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69c3802bec4fb6783710983c&clone_repository=69c381f0ec4fb678371098d7)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience. User instructions: The main goal of this portfolio is to showcase real client work, campaign results, and practical marketing skills to attract potential clients and employers. Target Audience: Startup founders, small business owners, and companies looking for performance marketing (Meta Ads, Google Ads) and lead generation services. Design Style: Clean, minimal, and professional. Premium look (similar to agency-level portfolios). Strong use of white space. Smooth animations and modern UI. Color palette: Dark + accent color (suggest something like deep green / blue for trust). Sections to Include: Hero Section, About Me, Work / Case Studies, Skills Section, Portfolio Preview, Testimonials, Contact Section. Functional Requirements: Fully responsive (mobile + desktop), Fast loading, SEO-friendly structure, Smooth scrolling navigation. Tone: Confident, results-driven, and slightly bold (not generic or boring). Important: Emphasize RESULTS and PERFORMANCE (not just tasks). Make it look like an agency-level portfolio, not a fresher portfolio. Include strong CTAs for lead generation. Optional Enhancements: Add stats section, Add case study cards with hover effects, Add animations for sections. IMPORTANT: The user provided reference URLs (https://adarshfoliodigitalmarketing.netlify.app). External web content from these URLs is included in this message. Use the actual titles, descriptions, and content found on those pages as the basis for demo objects. Do NOT generate generic placeholder content when real content is available from the crawled pages."

### Code Generation Prompt

> "Build a Next.js application for a creative portfolio called 'Adarsh Sao'. The content is managed in Cosmic CMS with the following object types: site-settings, case-studies, skills, work-experience, credentials, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: The main goal of this portfolio is to showcase real client work, campaign results, and practical marketing skills to attract potential clients and employers. Target Audience: Startup founders, small business owners, and companies looking for performance marketing (Meta Ads, Google Ads) and lead generation services. Design Style: Clean, minimal, and professional. Premium look (similar to agency-level portfolios). Strong use of white space. Smooth animations and modern UI. Color palette: Dark + accent color (suggest something like deep green / blue for trust). Sections to Include: Hero Section, About Me, Work / Case Studies, Skills Section, Portfolio Preview, Testimonials, Contact Section. Functional Requirements: Fully responsive (mobile + desktop), Fast loading, SEO-friendly structure, Smooth scrolling navigation. Tone: Confident, results-driven, and slightly bold. Important: Emphasize RESULTS and PERFORMANCE (not just tasks). Make it look like an agency-level portfolio, not a fresher portfolio. Include strong CTAs for lead generation. Optional Enhancements: Add stats section, Add case study cards with hover effects, Add animations for sections."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — Type-safe development
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with configured content

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd adarsh-sao-portfolio

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Cosmic credentials

# Run the development server
bun dev
```

### Environment Variables

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

### Fetching Case Studies

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Site Settings

```typescript
const { object: settings } = await cosmic.objects
  .findOne({ type: 'site-settings', slug: 'site-settings' })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This portfolio uses 6 Cosmic object types:

| Object Type | Purpose |
|---|---|
| `site-settings` | Hero, about, contact info, stats |
| `case-studies` | Campaign breakdowns with results |
| `skills` | Categorized skill sets |
| `work-experience` | Career timeline with metrics |
| `credentials` | Certifications and education |
| `testimonials` | Client feedback and ratings |

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy

### Netlify

1. Push your code to GitHub
2. Connect the repository in [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->