<div align="center">

# 🚀 Portfolio CMS

**Open-source, self-hosted portfolio for developers & designers**  
Built with **Next.js 14** · **Payload CMS 3** · **MongoDB** · **shadcn/ui**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/portfolio-cms&env=MONGODB_URI,PAYLOAD_SECRET,NEXTAUTH_SECRET,NEXTAUTH_URL,NEXT_PUBLIC_SITE_URL&envDescription=Required%20environment%20variables&envLink=https://github.com/YOUR_USERNAME/portfolio-cms%23environment-variables&project-name=portfolio-cms&repository-name=portfolio-cms)

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Payload CMS](https://img.shields.io/badge/Payload_CMS-3.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## ✨ Features

- 🎨 **Beautiful UI** — Dark/light mode, fully responsive, shadcn/ui components
- 📁 **Projects** — Showcase with tech stack, live demo & GitHub links, featured flag
- ✍️ **Blog** — Rich text editor, tags, SEO meta, draft/publish workflow
- 💬 **Testimonials** — Star ratings, featured testimonials on homepage
- 💼 **Work Experience** — Timeline with highlights and technologies
- 🛠 **Skills** — Categorized tech stack with proficiency levels
- 📬 **Contact Form** — Zod validation + Resend email integration
- 🔐 **Auth** — NextAuth v5 + Payload CMS authentication
- 🔄 **Draft/Publish** — Content versioning built in
- 🚀 **One-click Deploy** — Deploy to Vercel in minutes

## 🗂 Project Structure

```
portfolio-cms/
├── payload/
│   ├── collections/        # Payload CMS collections
│   │   ├── Users.ts
│   │   ├── Projects.ts
│   │   ├── BlogPosts.ts
│   │   ├── Testimonials.ts
│   │   ├── WorkExperience.ts
│   │   ├── Skills.ts
│   │   └── Media.ts
│   └── globals/            # Site-wide settings
│       ├── SiteSettings.ts
│       └── HeroSection.ts
├── src/
│   ├── app/
│   │   ├── (frontend)/     # Public portfolio pages
│   │   ├── (payload)/      # Payload admin panel
│   │   └── api/            # API routes (contact, auth)
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, ThemeProvider
│   │   ├── sections/       # Homepage sections
│   │   ├── portfolio/      # ProjectCard, BlogCard
│   │   └── ui/             # shadcn/ui components
│   └── lib/
│       ├── payload.ts      # Payload helpers
│       ├── auth.ts         # NextAuth config
│       └── utils.ts        # Utilities
├── payload.config.ts
└── next.config.mjs
```

## 🚀 Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-cms.git
cd portfolio-cms
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your `.env.local`:

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `PAYLOAD_SECRET` | Random secret (`openssl rand -base64 32`) |
| `NEXTAUTH_SECRET` | Random secret (`openssl rand -base64 32`) |
| `NEXTAUTH_URL` | Your site URL |
| `NEXT_PUBLIC_SITE_URL` | Your site URL |
| `RESEND_API_KEY` | (Optional) Resend API key for emails |
| `CONTACT_EMAIL` | (Optional) Email to receive contact form submissions |

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — your portfolio frontend.  
Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

### 4. Create your first admin user

Visit `/admin` and create your admin account on first run.

Then go to **Site Settings** and **Hero Section** globals to fill in your info!

---

## 🌐 Deploy to Vercel

1. Click the **Deploy with Vercel** button above
2. Connect your GitHub repo
3. Add environment variables in Vercel dashboard
4. Deploy!

**MongoDB Atlas (Free Tier):**
1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free M0 cluster
3. Get your connection string
4. Add to `MONGODB_URI` in Vercel env vars

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org) | React framework with App Router |
| [Payload CMS 3](https://payloadcms.com) | Headless CMS & admin panel |
| [MongoDB Atlas](https://www.mongodb.com/atlas) | Database (free tier available) |
| [NextAuth v5](https://authjs.dev) | Authentication |
| [shadcn/ui](https://ui.shadcn.com) | UI component library |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Resend](https://resend.com) | Email for contact form |
| [Zod](https://zod.dev) | Form validation |

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Give a ⭐️ if this project helped you!

## 📝 License

MIT © [Your Name](https://github.com/YOUR_USERNAME)
