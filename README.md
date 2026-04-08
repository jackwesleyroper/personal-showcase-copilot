# Jack Roper — Personal Portfolio

A sleek, modern personal portfolio website with a dark editorial aesthetic, inspired by Vercel/Linear minimalism.

## Features

- **Dark editorial design** — clean typography, sharp contrast, minimal UI
- **Animated hero section** — name, tagline, and CTA with staggered entrance animations
- **About section** — bio with skills
- **Project cards** — 3 featured projects with hover effects
- **Contact form** — sends email via EmailJS directly to jackwesleyroper@gmail.com

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Geist](https://vercel.com/font) font by Vercel
- [EmailJS](https://www.emailjs.com/) for client-side email delivery

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure EmailJS (for the contact form)

Copy the example env file and fill in your EmailJS credentials:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your credentials from [emailjs.com](https://www.emailjs.com):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### 4. Build for production

```bash
npm run build
npm run start
```

## EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Add a service (e.g., Gmail) — copy the **Service ID**
3. Create an email template — copy the **Template ID**
4. Go to Account → API Keys — copy your **Public Key**
5. Add these to your `.env.local` file

The email template should use these variables:
- `{{from_name}}` — sender's name
- `{{from_email}}` — sender's email
- `{{message}}` — message body
- `{{to_email}}` — recipient (jackwesleyroper@gmail.com)
