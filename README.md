# SmartPlacement — AI Career Intelligence Platform

A full-featured Next.js 14 (App Router) frontend for an AI-powered career marketplace.

---

## 🚀 Quick Start

### 1. Create the project (if starting fresh)

```bash
npx create-next-app@latest smartplacement \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git
```

### 2. Install all dependencies

```bash
cd smartplacement

# Core UI & animations
npm install framer-motion

# 3D & particles
npm install three @react-three/fiber @react-three/drei
npm install @tsparticles/react @tsparticles/slim

# State & HTTP
npm install zustand axios

# Types
npm install --save-dev @types/three
```

### 3. Copy this project's `src/` and config files into your project

Replace the generated `src/` with the files from this zip.

### 4. Configure environment

```bash
cp .env.local.example .env.local
# Then edit .env.local:
# NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

### 5. Run development server

```bash
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── auth/
│   │   ├── login/page.tsx          # Login page (glassmorphism + 3D orb)
│   │   └── register/page.tsx       # Register with role toggle (Student vs Company)
│   ├── dashboard/
│   │   ├── student/
│   │   │   ├── page.tsx            # Student dashboard (3D tilt cards, job matches)
│   │   │   ├── interviews/page.tsx # Mock Interviews
│   │   │   ├── resume/page.tsx     # Resume ATS Analyzer
│   │   │   └── jobs/page.tsx       # AI Job Matches
│   │   └── company/
│   │       ├── page.tsx            # Company dashboard (analytics, candidates)
│   │       ├── profile/page.tsx    # Company Profile
│   │       ├── post-job/page.tsx   # Post a Job
│   │       ├── applicants/page.tsx # View Applicants
│   │       └── ai-match/page.tsx   # AI Candidate Match engine
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                    # Redirects to /auth/login
├── components/
│   ├── ui/
│   │   ├── Background3D.tsx        # Constellation canvas + nebula blobs + 3D orb
│   │   └── TiltCard.tsx            # 3D perspective tilt glassmorphism card
│   └── layout/
│       ├── SideNav.tsx             # Role-aware sidebar navigation
│       └── DashboardHeader.tsx     # Top bar with streak counter + avatar
├── lib/
│   ├── api.ts                      # Axios instance (Bearer token interceptors)
│   └── auth.ts                     # Auth service (login, register, Google OAuth)
├── store/
│   └── authStore.ts                # Zustand store (persisted auth state)
└── types/
    └── index.ts                    # TypeScript interfaces
```

---

## 🔐 API Contract

### Environment Variable

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

### Endpoints Used

| Method         | Endpoint         | Payload                                     |
| -------------- | ---------------- | ------------------------------------------- |
| POST           | `/auth/register` | `{ fullName, email, password, role }`       |
| POST           | `/auth/login`    | `{ email, password }`                       |
| GET (redirect) | `/auth/google`   | Browser redirect via `window.location.href` |

### Token Storage

- JWT stored in `localStorage` as `sp_token`
- Also persisted in Zustand store via `zustand/middleware/persist`
- Attached as `Authorization: Bearer <token>` on all API requests

### Role-Based Routing

- `role: 'student'` → redirects to `/dashboard/student`
- `role: 'company'` → redirects to `/dashboard/company`

---

## 🎨 Design System

| Token        | Value                               |
| ------------ | ----------------------------------- |
| Background   | `#020409` (deep space)              |
| Neon Green   | `#00ff9d`                           |
| Neon Blue    | `#00b4ff`                           |
| Neon Purple  | `#a78bfa`                           |
| Glass BG     | `rgba(10,22,40,0.6)` + `blur(20px)` |
| Font Display | Orbitron (headings, numbers)        |
| Font Body    | Syne (UI text)                      |
| Font Mono    | JetBrains Mono (code, labels)       |

---

## 🌐 Deployment (Antygravity / Vercel / Render)

Set these environment variables in your deployment dashboard:

```
NEXT_PUBLIC_API_URL=https://your-api.domain.com/api/v1
```

That's the only variable needed — all API calls and Google OAuth redirect use it automatically.

---

## 📦 All npm Commands (copy-paste)

```bash
npm install framer-motion three @react-three/fiber @react-three/drei @tsparticles/react @tsparticles/slim zustand axios
npm install --save-dev @types/three
```
