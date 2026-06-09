# Prince Emmanuel Seventh-day Adventist Church

Official website for **Prince Emmanuel SDA Church (PESDAC)** — an English-speaking Seventh-day Adventist church in Ringway Estates, Osu, Accra, Ghana.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Cormorant Garamond + DM Sans (Google Fonts)
- **Package Manager:** pnpm
- **Deployment:** Vercel

## Features

- Hero section with live sermon player
- Sermons section
- About page (Our Story, Leadership)
- Ministries section
- Visit & location info
- AI-powered chat widget (Anthropic Claude)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the project root:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

## CI/CD

GitHub Actions workflows in `.github/workflows/`:

- **`ci.yml`** — type-check, lint, and build on every push and PR
- **`deploy.yml`** — deploy preview to Vercel on PRs, deploy to production on push to `main`

Required GitHub repository secrets:

| Secret | Description |
|---|---|
| `VERCEL_TOKEN` | Vercel personal access token |
| `VERCEL_ORG_ID` | Vercel team/org ID |
| `VERCEL_PROJECT_ID` | Vercel project ID |
