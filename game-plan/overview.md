# Contractor Source Platform - Master Game Plan

## Overview

This document provides a high-level roadmap for building the Contractor Source platform as a modular, component-based system. The platform is primarily a **quoting system** for premium stone slabs, with e-commerce capabilities planned for future implementation.

## Architecture Philosophy

- **Modular Design**: Each feature area is self-contained with its own components, state, and documentation
- **Progressive Enhancement**: Start with core quote functionality, add features incrementally
- **Component-Based**: Reusable components organized by feature domain
- **Type-Safe**: Full TypeScript implementation with generated GraphQL types
- **Performance-First**: Optimized for fast loading and smooth interactions

## Module Priorities

### Phase 1: Core Platform (Immediate)
1. **Quote System** - Primary business function
2. **Product Showcase** - Display inventory with search/filters
3. **User System** - Basic authentication and account management

### Phase 2: Enhanced Features (Next Quarter)
4. **Content Management** - Dynamic showroom, gallery, testimonials
5. **Admin Analytics** - Quote management and basic reporting

### Phase 3: Future Expansion (As Needed)
6. **E-commerce Module** - Full shopping cart and checkout capabilities

## Module Dependencies

```
┌─────────────────┐
│  Quote System   │ ← Core Feature
└────────┬────────┘
         │ Depends on
         ↓
┌─────────────────┐     ┌─────────────────┐
│Product Showcase │ ←───│  User System    │
└─────────────────┘     └─────────────────┘
         │                       │
         ↓                       ↓
┌─────────────────┐     ┌─────────────────┐
│Content Mgmt     │     │Admin Analytics  │
└─────────────────┘     └─────────────────┘
         │
         ↓
┌─────────────────┐
│Future E-commerce│ ← Optional
└─────────────────┘
```

## Technical Stack

### Frontend
- **Framework**: Next.js 15.3.3 (App Router)
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **State Management**: Context API for simple state, consider Zustand for complex state
- **Data Fetching**: Apollo Client with GraphQL
- **Forms**: React Hook Form + Zod validation
- **Animation**: Framer Motion

### Backend (Existing)
- **CMS**: WordPress with WooCommerce
- **API**: WPGraphQL with custom extensions
- **Database**: MariaDB 10.6
- **Server**: Cloudways (Nginx + Apache)

## Development Workflow

1. **Planning**: Review module documentation before implementation
2. **Component Design**: Create reusable components in feature folders
3. **Type Safety**: Generate GraphQL types before using new queries
4. **Testing**: Test components in isolation before integration
5. **Documentation**: Update module docs with implementation details

## Folder Structure Standards

Each module follows this structure:
```
module-name/
├── README.md           # Module overview and requirements
├── components.md       # Component specifications
├── api-endpoints.md    # GraphQL queries/mutations needed
├── user-flow.md        # UX flows and wireframes
└── implementation/     # (Created during development)
    ├── components/
    ├── hooks/
    ├── utils/
    └── types/
```

## Component Naming Conventions

- **Pages**: `[Feature]Page` (e.g., `QuotePage`)
- **Layouts**: `[Feature]Layout` (e.g., `QuoteLayout`)
- **Forms**: `[Feature]Form` (e.g., `QuoteRequestForm`)
- **Cards**: `[Feature]Card` (e.g., `ProductCard`)
- **Modals**: `[Feature]Modal` (e.g., `QuoteDetailsModal`)
- **Sections**: `[Feature]Section` (e.g., `QuoteHistorySection`)

## State Management Strategy

### Local State (useState)
- UI state (modals, dropdowns, tabs)
- Form state (managed by React Hook Form)
- Temporary data

### Context API
- User authentication state
- Quote builder state
- Theme/UI preferences

### Apollo Cache
- Product data
- User data
- Quote history

### Future: Zustand (if needed)
- Complex cart state
- Multi-step form state
- Global notifications

## Performance Guidelines

1. **Images**: Use Next.js Image component with proper sizing
2. **Code Splitting**: Leverage dynamic imports for heavy components
3. **Caching**: Utilize Apollo cache policies effectively
4. **SEO**: Implement proper meta tags and structured data
5. **Loading States**: Always show loading indicators for async operations

## Security Considerations

1. **Authentication**: JWT tokens with secure httpOnly cookies
2. **Authorization**: Role-based access control (RBAC)
3. **Input Validation**: Client and server-side validation
4. **Data Sanitization**: Sanitize all user inputs
5. **HTTPS**: Enforce SSL for all communications

## Success Metrics

- **Quote System**: Time to complete quote < 3 minutes
- **Page Load**: Core Web Vitals all green
- **Search**: Results returned < 500ms
- **Mobile**: 100% responsive design
- **Accessibility**: WCAG 2.1 AA compliance

## Next Steps

1. Review each module's README.md for detailed specifications
2. Start with Module 1 (Quote System) as the primary feature
3. Build shared components that multiple modules will use
4. Implement incrementally with regular testing

---

*This is a living document. Update as the project evolves.*