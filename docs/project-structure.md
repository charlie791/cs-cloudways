# Contractor Source Project Structure

## Overview

This project consists of a headless WordPress/WooCommerce backend with a Next.js frontend, hosted on Cloudways.

## Directory Structure

```
/home/master/
├── docs/                                    # Project documentation
│   ├── changelog.md                         # Project changelog (DO NOT MODIFY)
│   ├── project-structure.md                 # This file
│   └── CLAUDE.md                            # Development guidance for Claude Code
│
├── contractor-source-frontend/              # Next.js 15.3.3 Frontend Application
│   ├── .next/                               # Build output directory
│   ├── node_modules/                        # NPM dependencies
│   ├── public/                              # Static assets
│   │   ├── fonts/                           # Custom fonts
│   │   └── images/                          # Static images
│   ├── src/                                 # Source code
│   │   ├── app/                             # Next.js App Router pages
│   │   │   ├── about/                       # About page
│   │   │   ├── api/                         # API routes
│   │   │   ├── blog/                        # Blog section
│   │   │   ├── contact/                     # Contact page
│   │   │   ├── gallery/                     # Gallery/lookbook
│   │   │   ├── products/                    # Product catalog
│   │   │   ├── quote/                       # Quote request system
│   │   │   ├── services/                    # Services page
│   │   │   ├── showroom/                    # Showroom info
│   │   │   ├── layout.tsx                   # Root layout
│   │   │   ├── page.tsx                     # Home page
│   │   │   └── globals.css                  # Global styles
│   │   ├── components/                      # React components
│   │   │   ├── common/                      # Shared components
│   │   │   ├── forms/                       # Form components
│   │   │   ├── layout/                      # Layout components
│   │   │   ├── products/                    # Product components
│   │   │   └── ui/                          # UI components
│   │   ├── lib/                             # Utilities and libraries
│   │   │   ├── apollo/                      # GraphQL client setup
│   │   │   ├── hooks/                       # Custom React hooks
│   │   │   ├── utils/                       # Utility functions
│   │   │   └── wordpress/                   # WordPress integration
│   │   └── types/                           # TypeScript definitions
│   ├── codegen.ts                           # GraphQL code generation
│   ├── next.config.ts                       # Next.js configuration
│   ├── package.json                         # Dependencies and scripts
│   ├── tailwind.config.ts                   # Tailwind CSS config
│   └── tsconfig.json                        # TypeScript config
│
└── applications/                            # WordPress installations
    ├── gqtwwdgrww/                          # Primary WordPress site
    │   ├── conf/                            # Server configurations
    │   │   ├── server.nginx                 # Nginx config
    │   │   ├── server.apache                # Apache config
    │   │   └── fpm-pool.conf                # PHP-FPM config
    │   ├── logs/                            # Application logs
    │   ├── public_html/                     # WordPress root
    │   │   ├── wp-content/                  # Themes, plugins, uploads
    │   │   ├── wp-config.php                # WordPress configuration
    │   │   └── [WordPress core files]
    │   └── ssl/                             # SSL certificates
    │
    └── yftjggardt/                          # Secondary WordPress site
        └── [Same structure as primary]
```

## Technology Stack

### Frontend (Next.js)
- **Framework**: Next.js 15.3.3 with App Router
- **UI**: React 19.0.0, TypeScript, Tailwind CSS 4
- **Data**: Apollo Client for GraphQL
- **Forms**: React Hook Form with Zod validation
- **Animation**: Framer Motion

### Backend (WordPress/WooCommerce)
- **CMS**: WordPress with WooCommerce
- **API**: WPGraphQL + WooCommerce GraphQL
- **Auth**: JWT Authentication
- **Cache**: Breeze + Object Cache Pro + Varnish
- **Server**: Nginx + Apache, PHP 8.1, MariaDB 10.6

## Key URLs

- **Primary WordPress**: https://woocommerce-1475440-5585552.cloudwaysapps.com
- **Secondary WordPress**: https://woocommerce-1475440-5585553.cloudwaysapps.com
- **GraphQL Endpoint**: https://woocommerce-1475440-5585552.cloudwaysapps.com/graphql
- **GraphQL IDE**: https://woocommerce-1475440-5585552.cloudwaysapps.com/graphql-ide

## Development Commands

### Frontend Development
```bash
cd /home/master/contractor-source-frontend

# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint

# Generate GraphQL types
npm run codegen
```

### WordPress Management
```bash
cd /home/master/applications/gqtwwdgrww/public_html/

# Database operations
wp db export backup.sql
wp db import backup.sql

# Clear caches
wp cache flush
wp transient delete --all

# Plugin management
wp plugin list
wp plugin update --all
```

## Important Notes

1. **Two WordPress Sites**: The project has two separate WordPress installations - changes to one don't affect the other
2. **Production Environment**: Always backup before making changes
3. **Caching**: Multiple cache layers (Breeze, Object Cache, Varnish) - clear after changes
4. **GraphQL**: Test queries in GraphQL IDE before implementation
5. **Frontend Location**: The actual Next.js app is in `/contractor-source-frontend/`, not the planned directory structure