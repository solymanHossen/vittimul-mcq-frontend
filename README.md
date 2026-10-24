# Vittimul MCQ — Frontend

<p align="center">
  <strong>A high-performance, world-class web frontend for the Vittimul MCQ examination and preparation platform.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.4.3-black?logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.3.1-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4.3-38bdf8?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Auth-NextAuth.js-purple" alt="NextAuth.js" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>

---

## 🌟 Highlights & Architecture

Vittimul MCQ Frontend is engineered for zero-latency interactions, seamless live examination flows, and rock-solid reliability:

- **Next.js 16 App Router & Turbopack** — Blazing fast build and dev speeds with React 19 Server Components and Suspense streaming.
- **Tailwind CSS v4 & Shadcn UI** — Modern, design-tokenized styling engine with native CSS variables and dark/light mode toggles.
- **Secure Authentication Flow** — Complete NextAuth.js JWT-based session management, paired with Next.js 16 Edge Proxy (`proxy.ts`) for route gating.
- **Live MCQ Experience** — Real-time timer countdown, anti-cheat detection, instant question navigation, and immediate scoring.
- **Role-Based Access Control** — Segregated route hierarchies for public users, authenticated students (`/dashboard`), and administrators (`/(admin)`).
- **Zero Vulnerabilities** — Fully audited and locked with dependencies up to date against GHSA advisories.

---

## 🛠 Tech Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | [Next.js](https://nextjs.org/) 16.4.3 | App Router, Server Actions, Turbopack |
| **Library** | [React](https://react.dev/) 19.3.1 | React Server Components, Suspense |
| **Language** | [TypeScript](https://www.typescriptlang.org/) 5.9 | Strict mode typing across all routes & actions |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4.3 | `@theme inline`, OKLCH palette, tw-animate-css |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) (Radix Nova) | Accessible, customizable primitive UI |
| **Authentication** | [NextAuth.js](https://next-auth.js.org/) v4 | Credentials provider, JWT sessions, role claims |
| **Validation** | [Zod](https://zod.dev/) v4 | Robust input schemas for forms and server actions |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, scalable vector iconography |

---

## 📁 Project Structure

```
vittimul-mcq-frontend/
├── actions/              # Next.js Server Actions (Auth, registration, OTP)
├── app/                  # Next.js App Router root
│   ├── (admin)/          # Protected admin panel routes & RBAC layout
│   ├── (auth)/           # Authentication flows (login, register, forgot-password, OTP)
│   ├── (protected)/      # Authenticated user dashboard & practice areas
│   ├── api/auth/         # NextAuth route handler endpoint
│   ├── globals.css       # Tailwind CSS v4 design system tokens
│   ├── layout.tsx        # Root HTML shell with ThemeProvider & SEO metadata
│   └── page.tsx          # World-class landing page & live exam preview
├── components/           # Reusable UI components & shadcn primitives
│   ├── ui/               # Button, Card, Input, Label, Alert, OTP, etc.
│   └── theme-provider.tsx # Theme context with keyboard shortcut ('d' to toggle)
├── hooks/                # Custom React client hooks
├── lib/                  # Utilities, API client fetcher, Zod validation schemas
├── proxy.ts              # Next.js 16 Proxy (Route protection middleware)
├── auth.ts               # NextAuth configuration and getServerSession helpers
└── package.json          # Project manifest & dependency specifications
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 22.0.0` (Recommended: Node 25+)
- **NPM** or **PNPM**
- **Vittimul MCQ Backend** running (default: `http://localhost:3000`)

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/solymanHossen/vittimul-mcq-frontend.git
cd vittimul-mcq-frontend

# Install dependencies
npm install
```

### 2. Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Configure your variables:

```env
# Backend API Base URL
NEXT_PUBLIC_API_URL=http://localhost:3000

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-super-strong-jwt-secret-here
AUTH_SECRET=your-super-strong-jwt-secret-here
```

### 3. Development Server

Start the Turbopack-powered development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the assigned port) to view the application.

---

## 🧪 Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Runs Next.js in Turbopack development mode |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Serves production build |
| `npm run lint` | Runs ESLint 9 checks |
| `npm run typecheck` | Performs TypeScript compiler verification (`tsc --noEmit`) |
| `npm run format` | Formats code with Prettier and Tailwind plugin |

---

## 🛡 Security & Best Practices

- **Zero Client Bailouts**: Form flows with query parameters (`useSearchParams`) are isolated inside `<Suspense>` boundaries to guarantee static optimization.
- **Edge Routing & Proxy**: Route protection executes via `proxy.ts` (Next.js 16 standard) before reaching UI render cycles.
- **Sanitized Server Actions**: All input data is parsed and verified by Zod before transmission to backend endpoints.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

Developed with ❤️ by **Solyman Hossen**.
