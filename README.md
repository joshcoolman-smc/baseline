# Baseline - Next.js Starter with Supabase Auth and ShadCN

A clean, modern starter template for building MVPs and prototypes quickly with Next.js, Supabase authentication, and ShadCN components. Designed for effective AI-driven development workflows.

## 🚀 Features

- **Authentication Ready**: Supabase authentication pre-configured with protected routes
- **Manual User Management**: No public signup - create users manually in Supabase admin
- **Complete UI Kit**: All ShadCN components pre-installed and configured
- **Dark Mode Support**: Built-in theme switching with next-themes
- **Type Safety**: Full TypeScript support throughout the codebase
- **Modern Stack**: Latest Next.js 15 with App Router and React 19

## 🛠️ Tech Stack

### Core
- **Next.js 15**: With App Router for modern routing patterns
- **React 19**: Latest React features and improvements
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

### Authentication & Backend
- **Supabase**: For authentication and database (if needed)
  - SSR-compatible authentication flow
  - Protected routes implementation
  - Server and client components integration

### UI Components
- **ShadCN UI**: Complete component library built on Radix UI
  - All components pre-installed and ready to use
  - Customizable with Tailwind CSS
  - Accessible and responsive by default
- **Lucide Icons**: Simple, clean icon set
- **Next-themes**: For dark/light mode support

### Form Handling
- **React Hook Form**: For efficient form state management
- **Zod**: For schema validation and type inference

### Development Tools
- **ESLint**: For code quality and consistency
- **TypeScript**: For static type checking

## 🏗️ Project Structure

The project follows a clean, modular structure:

```
src/
├── app/                    # App Router pages and layouts
│   ├── (auth)/             # Authentication related routes and components
│   │   ├── _components/    # Auth-specific components
│   │   ├── _lib/           # Auth utilities
│   │   ├── _supabase/      # Supabase client configuration
│   │   └── login/          # Login page
│   ├── dashboard/          # Protected dashboard route
│   └── page.tsx            # Home page
├── components/             # Shared components
│   ├── ui/                 # ShadCN UI components
│   ├── global-nav.tsx      # Global navigation
│   └── theme-provider.tsx  # Theme context provider
├── hooks/                  # Custom React hooks
└── lib/                    # Utility functions and shared logic
```

## 🚦 Getting Started

1. **Clone the repository**

```bash
git clone https://your-repo-url.git my-project
cd my-project
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set up Supabase**

- Create a Supabase project at [supabase.com](https://supabase.com)
- Create a `.env.local` file with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. **Create users in Supabase**

- Go to Authentication > Users in the Supabase dashboard
- Add users manually with email/password

5. **Run the development server**

```bash
pnpm dev
```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🧠 AI-Driven Development

This starter is optimized for AI-driven development workflows:

- **Clean, consistent code structure**: Makes it easy for AI to understand and modify
- **Complete component library**: All ShadCN components ready to use
- **Type safety**: Helps AI generate correct, type-safe code
- **Modular architecture**: Facilitates adding new features with minimal changes

## 🤖 .clinerules for AI Assistants

This repository includes a `.clinerules` file that provides structured guidance for AI assistants (like Claude) when working with this codebase. These rules help ensure consistent, high-quality code generation that follows project conventions.

### Benefits of .clinerules

- **Consistent Architecture**: Enforces the feature module pattern and proper component organization
- **Code Quality Standards**: Ensures type safety, clean coding principles, and proper commenting
- **UI Consistency**: Guides the use of ShadCN components and Lucide icons
- **Import Standards**: Maintains consistent import patterns using the @/ alias
- **Component Structure**: Clearly defines when to use server vs. client components

### Key Guidelines

- **Feature Module Pattern**: Organizes code in `/src/app/features/[feature-name]/` with a consistent structure:
  ```
  src/app/features/[feature-name]/
  ├── components/
  ├── hooks/
  ├── repository/
  ├── service/
  ├── types/
  └── utils/
  ```
- **Architecture Patterns**: Uses Repository, Service, and Hooks patterns with proper interfaces
- **Component Rules**: 
  - Page routes remain server components
  - Client-side functionality implemented in client components
  - All components designed for both dark and light mode
- **Development Standards**:
  - Type safety throughout the codebase
  - Zod for validation and type inference
  - Mock data repositories for testing

The `.clinerules` file significantly improves AI-assisted development by providing clear, structured guidance that results in maintainable, consistent code that follows project conventions.

## 📝 License

MIT
