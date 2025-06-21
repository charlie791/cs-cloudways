# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Headless e-commerce platform for premium stone slabs:
- **Frontend**: Next.js 15.3.3 with TypeScript, Tailwind CSS v4, Apollo Client
- **Backend**: WordPress/WooCommerce at `woocommerce-1475440-5585552.cloudwaysapps.com`
- **API**: GraphQL endpoint with generated types via codegen

## Essential Commands

### Frontend Development
```bash
cd /home/master/contractor-source-frontend

# Development
npm run dev              # Start dev server (port 3000 or 3002)
npm run build            # Production build
npm run start            # Start production server

# Code Quality
npm run lint             # ESLint checks
npm run type-check       # TypeScript validation
npm run format           # Prettier formatting
npm run format:check     # Check formatting

# GraphQL
npm run codegen          # Generate GraphQL types from schema
npm run codegen:watch    # Watch mode for GraphQL types
```

### WordPress Backend
```bash
cd /home/master/applications/gqtwwdgrww/public_html/

# Cache Management (CRITICAL after changes)
wp cache flush
wp transient delete --all

# Database Operations
wp db export backup-$(date +%Y%m%d).sql  # Always backup first

# Maintenance
wp plugin update --all
```

## Architecture & Key Patterns

### Frontend Structure
- **App Router**: All pages in `src/app/` using Next.js 15 conventions
- **Components**: Organized by domain (layout/, products/, ui/, forms/)
- **GraphQL**: Apollo Client with type-safe queries via codegen
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Forms**: React Hook Form + Zod validation
- **Path Aliases**: Use `@/*` for imports from src/

### GraphQL Integration
- Schema endpoint: `https://woocommerce-1475440-5585552.cloudwaysapps.com/graphql`
- Types auto-generated to `src/gql/` - run codegen after query changes
- Apollo Client configured with caching policies in `src/lib/apollo/client.ts`
- Error handling and logging built into Apollo link chain

### Critical Locations
- **Frontend Root**: `/home/master/contractor-source-frontend/`
- **WordPress Root**: `/home/master/applications/gqtwwdgrww/public_html/`
- **GraphQL IDE**: `https://woocommerce-1475440-5585552.cloudwaysapps.com/graphql-ide`
- **Documentation**: `/home/master/docs/` (component specs, API schema, requirements)

## Production Considerations
- Multiple cache layers active (Breeze, Object Cache, Varnish) - always flush after backend changes
- Two WordPress sites exist (primary: gqtwwdgrww, secondary: yftjggardt)
- Next.js may use port 3002 if 3000 is occupied - verify PHP proxy configuration
- Always backup database before WordPress modifications
- GraphQL endpoint includes timestamp in dev mode to bypass caching