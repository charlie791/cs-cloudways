# Contractor Source Next.js Frontend

A blazing-fast, modern Next.js frontend for Contractor Source, showcasing premium stone slabs with a headless WordPress/WooCommerce backend.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🛠️ Tech Stack

- **Next.js 15.3** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Apollo Client** - GraphQL data fetching
- **WordPress/WooCommerce** - Headless CMS backend
- **Framer Motion** - Animations
- **React Hook Form + Zod** - Form handling

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── layout/      # Header, Footer, Layout
│   ├── products/    # Product-specific components
│   ├── ui/          # Reusable UI components
│   └── forms/       # Form components
├── lib/             # Utilities and configurations
│   ├── apollo/      # GraphQL client setup
│   └── utils/       # Helper functions
└── types/           # TypeScript type definitions
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types
npm run codegen      # Generate GraphQL types
```

## 🎨 Design System

- **Colors**: Stone-inspired palette (granite, marble, quartz)
- **Typography**: Inter (body) + Playfair Display (headings)
- **Components**: Fully responsive with mobile-first approach
- **Performance**: Optimized images, fonts, and lazy loading

## 📝 Documentation

See the `/home/master/docs/` directory for comprehensive documentation:
- `component-specifications.md` - Design system and component specs
- `component-templates.md` - Code templates and patterns
- `api-schema.md` - GraphQL schema documentation
- `requirements.md` - Technical requirements

## 🔒 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://your-wordpress-site.com/graphql
```

## 🚦 Performance

- **Lighthouse Score**: Targeting 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **SEO**: Full meta tags, structured data, and sitemap
- **Accessibility**: WCAG 2.1 AA compliant

## 📦 Key Features

- ✅ Server-side rendering for SEO
- ✅ Static generation for product pages
- ✅ Real-time product search
- ✅ Advanced filtering system
- ✅ Quote request system
- ✅ Responsive image galleries
- ✅ Performance optimizations

Built with ❤️ for Contractor Source