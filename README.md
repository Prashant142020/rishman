# web-page

A modern web application built using Next.js, TypeScript, and pnpm.

---

# 🚀 Tech Stack

- Next.js
- TypeScript
- React
- pnpm
- Tailwind CSS (if applicable)

---

# 📦 Prerequisites

Before starting, install the following software:

| Software | Version |
| -------- | ------- |
| Node.js  | 18+     |
| pnpm     | Latest  |
| Git      | Latest  |

---

# ⚙️ Installation Guide

## 1. Clone Repository

```bash
git clone <your-repository-url>
```

Move into the project folder:

```bash
cd <project-folder>
```

---

## 2. Install Dependencies

```bash
pnpm install
```

or

```bash
pnpm i
```

---

# 🖥️ Development Setup

## Run Development Server

```bash
pnpm dev
```

Application will run on:

```txt
http://localhost:3000
```

Open the URL in your browser.

---

# 🛠️ Production Build

To create a production build:

```bash
pnpm build
```

---

# ▶️ Start Production Server

```bash
pnpm start
```

---

# 📁 Project Structure

```txt
project-root/
│
├── app/                # App Router pages
├── components/         # Reusable components
├── public/             # Static assets
├── styles/             # Styling files
├── package.json
├── pnpm-lock.yaml
└── next.config.ts
```

---

# ✨ Development Guide

## Edit Main Page

Modify:

```txt
app/page.tsx
```

Changes auto-refresh during development.

---

## Create Components

Add reusable components inside:

```txt
components/
```

Example:

```tsx
export default function Button() {
  return <button>Click Me</button>;
}
```

---

# 🎨 Styling

Global styles are usually located in:

```txt
app/globals.css
```

---

# 🔤 Font Optimization

This project uses:

- `next/font`
- Geist font family

Documentation:

- https://nextjs.org/docs/app/building-your-application/optimizing/fonts

---

# 📚 Useful Commands

| Command        | Description             |
| -------------- | ----------------------- |
| `pnpm install` | Install dependencies    |
| `pnpm dev`     | Run development server  |
| `pnpm build`   | Create production build |
| `pnpm start`   | Start production server |
| `pnpm lint`    | Run ESLint              |

---

# 🌐 Deployment

## Deploy on Vercel

1. Push project to GitHub
2. Open:

   https://vercel.com/new

3. Import repository
4. Click Deploy

---

# 🔧 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

# 🧹 Clean Install

If dependencies break:

```bash
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

---

# 🚨 Common Issues

## Port Already in Use

Run on another port:

```bash
pnpm dev -- -p 3001
```

---

# 📖 Learn More

- https://nextjs.org/docs
- https://nextjs.org/learn
- https://github.com/vercel/next.js

---

# 📄 License

This project is licensed under your preferred license.
