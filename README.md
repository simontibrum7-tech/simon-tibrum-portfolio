# 🎬 Simon Tibrum — Actor Portfolio Website

A modern, cinematic, professional actor portfolio website for **Simon Tibrum Nkugnami** (stage name: **Simon Tibrum**).

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Supabase**.

---

## 🚀 Live Demo

> Deploy this project to Vercel to get your live URL.

---

## ✨ Features

- 🎥 **Cinematic Hero Section** with animated text and call-to-action
- 👤 **About Section** — biography, skills, and training
- 🖼️ **Portfolio Gallery** — photo gallery with smooth animations
- 🎬 **Showreel Section** — YouTube video embed
- 📬 **Contact Form** — powered by Supabase backend
- 📱 **Social Links** — YouTube, WhatsApp, Facebook, TikTok
- 📲 **Mobile-First Responsive** design
- ⚡ **Framer Motion** animations throughout
- 🌑 **Dark cinematic luxury** theme (black, gold, red accents)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Supabase | Database & contact form backend |
| Vercel | Deployment |

---

## 📦 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/simontibrum7-tech/simon-tibrum-portfolio.git
cd simon-tibrum-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key-here
```

### 4. Set up Supabase database
Run the SQL schema in your Supabase SQL editor:
```sql
-- See supabase-schema.sql in the project root
```

### 5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploy to Vercel

### Option A — Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Select the repository: `simon-tibrum-portfolio`
4. Add **Environment Variables** in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL` → your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → your Supabase anon key
5. Click **"Deploy"** 🚀

### Option B — Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🗄️ Supabase Setup

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `supabase-schema.sql`
3. Get your API keys from **Settings → API**
4. Add them to your `.env.local` file and Vercel environment variables

---

## 📁 Project Structure

```
simon-tibrum-portfolio/
├── public/                  # Static images and assets
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main page
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer with social links
│   │   └── sections/
│   │       ├── Hero.tsx     # Hero section
│   │       ├── About.tsx    # About / biography
│   │       ├── Portfolio.tsx # Photo gallery
│   │       ├── Showreel.tsx # Video showreel
│   │       ├── Contact.tsx  # Contact form
│   │       └── Training.tsx # Training & skills
│   └── lib/
│       └── supabaseClient.ts # Supabase client
├── supabase-schema.sql      # Database schema
├── vercel.json              # Vercel deployment config
├── .env.example             # Environment variable template
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 📱 Social Media

- **YouTube:** [@Simontibrum](https://www.youtube.com/@Simontibrum)
- **Facebook:** [Simon Tibrum](https://www.facebook.com/share/18r5ZGSeX8/?mibextid=wwXIfr)
- **TikTok:** [@Simontibrum](https://vt.tiktok.com/ZSQTCYWSH/)
- **WhatsApp:** [Chat](https://wa.me/233241530874)

---

## 📄 License

This project is private and built exclusively for Simon Tibrum Nkugnami.

---

> *"Bringing emotions, passion, and authenticity to every role."* — Simon Tibrum
