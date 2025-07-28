# 📝 NoteForge

A modern, full-stack notes management app built with Next.js 15, supporting rich text editing, theming, and secure authentication — designed for productivity and simplicity.

## 🌟 Features

- ✍️ **Rich Text Editing**: Create and format beautiful notes using the Tiptap editor.
- 📁 **Notebook Management**: Organize your notes within multiple notebooks.
- 🔐 **User Dashboard**: Secure login with Better Auth, including Google OAuth, email verification, forgot/reset password.
- 🌗 **Dark Mode + Theming**: Beautiful and responsive UI with custom themes and dark mode support.
- 📬 **Email Integration**: Transactional emails for verification and password resets powered by Resend.

## 🚀 Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Authentication**: Better Auth (Email/Password + Google OAuth)
- **Database**: NeonDB PostgreSQL (Drizzle ORM)
- **Editor**: Tiptap (Rich Text Editor)
- **Email**: Resend
- **Styling**: ShadCN UI, Tailwind CSS, Lucide React
- **Development**: Turborepo, ESLint, Prettier
- **Deployment**: Vercel

## 🛠️ Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/rushikesh5035/noteforge.git
cd noteforge
```

### 2. Install dependencies:

```bash
pnpm install
```

### 3. Set up environment variables:

```bash
cp .env.example .env
```

Edit .env with your configuration:

- DATABASE_URL=
- GOOGLE_CLIENT_ID=
- GOOGLE_CLIENT_SECRET=
- NEXT_PUBLIC_BASE_URL=
- BETTER_AUTH_SECRET=
- BETTER_AUTH_URL=
- RESEND_API_KEY=

### 4. Push Database Schema (Drizzle)

```bash
npx drizzle-kit push
```

### 5. Start development server

```bash
pnpm run dev
```

### 6. Visit

```bash
http://localhost:3000
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
