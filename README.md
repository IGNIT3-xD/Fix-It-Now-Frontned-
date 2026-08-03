# Fix It Now 🔧

**Fix It Now** is a modern home-services marketplace that connects homeowners with verified local professionals. From plumbing and electrical work to painting and carpentry, we help people get trusted repair and craftsmanship services at **fixed, upfront rates** — no surprises, no guesswork.

> Everyone should be able to find a reliable professional for their home needs with confidence. That is the simple idea behind Fix It Now.

---

## 🔗 Links

| | |
|---|---|
| **🌍 Live Website** | [https://fix-it-now-live.vercel.app/](https://fix-it-now-live.vercel.app/) |
| **⚙️ Backend API** | [https://fix-it-now-silk.vercel.app/](https://fix-it-now-silk.vercel.app/) |
| **📄 API Documentation** | [https://documenter.getpostman.com/view/55121364/2sBY4LR2aC](https://documenter.getpostman.com/view/55121364/2sBY4LR2aC) |

---

## 🎯 Why Fix It Now?

Finding a trustworthy home service provider is hard. Most homeowners rely on word of mouth, get inconsistent pricing, and have little recourse if something goes wrong.

**Fix It Now solves this by:**

- **Fixed upfront rates** — you know the price before booking, so there are no hidden costs.
- **Verified professionals** — technicians are vetted, and customers can rate and review their work.
- **A transparent marketplace** — customers can compare services, and technicians can grow their business.

---

## ✨ Features

### For Customers
- Browse and search services by name, category, location, and rating.
- View detailed service pages to compare providers.
- Book a service at a fixed price with an easy online flow.
- Leave reviews and ratings for services you have used.
- Track your bookings from your personal dashboard.

### For Technicians
- A dedicated dashboard to manage your profile and services.
- List your own services with pricing and descriptions.
- View and manage incoming bookings.

### For Admins
- A full analytics dashboard with stats on users, technicians, services, bookings, and revenue.
- Manage users and service categories.
- Keep the marketplace healthy and trustworthy.

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS v4 + shadcn/ui |
| **Data Fetching** | Server Actions + REST API |
| **Backend** | Node.js, Express.js, Prisma, JWT |
| **Charts** | Recharts |
| **Forms & Validation** | React Hook Form + Zod |
| **Deployment** | Vercel |

---

## 🏗️ Project Structure

```
├── app/
│   ├── (public)/           # Public pages (Home, /services, /contact-us)
│   ├── (private)/
│   │   └── dashboard/      # Role-based dashboards (admin, customer, technician)
│   │       ├── _actions/   # Server actions (backend calls + auth checks)
│   │       ├── _components/# Shared dashboard UI components
│   │       └── _config/    # Navigation & dashboard config
│   ├── auth/               # Login & registration pages
│   │   └── _actions/       # Auth server actions (sign in, sign up, profile)
│   ├── layout.tsx          # Root layout (fonts, theme provider)
│   └── globals.css         # Tailwind v4 theme & design tokens
├── components/             # Reusable UI components
│   └── ui/                 # shadcn/ui primitives
├── hooks/                  # Custom React hooks
├── lib/                    # Shared types & utilities
├── public/                 # Static assets & images
└── proxy.ts                # Auth gateway (route protection & role checks)
```

> **Note:** `proxy.ts` is the Next.js 16 replacement for `middleware.ts`. It protects routes by verifying JWT cookies and enforcing role-based access to each dashboard.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (latest LTS recommended)
- npm

### 1. Clone the repository
```bash
git clone <repository-url>
cd fix-it-now-frontend-a5
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the project root with the following keys:

```env
BACKEND_API=https://fix-it-now-silk.vercel.app/
JWT_ACCESS=<your-jwt-access-secret>
JWT_REFRESH=<your-jwt-refresh-secret>
```

> The `JWT_ACCESS` secret must match the key used by the backend, otherwise authentication will break silently.

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build (runs type checking) |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## 🧭 How It Works

1. **Browse** — Visitors explore services on the public pages without an account.
2. **Join** — Sign up as a **Customer** or **Technician** (admins are provisioned separately).
3. **Book** — Customers book a service and get confirmation in their dashboard.
4. **Deliver** — Technicians manage their services and bookings from their dashboard.
5. **Review** — Customers rate and review completed services, keeping quality high.

---

## 📝 License

This project is licensed under the **MIT License**.
