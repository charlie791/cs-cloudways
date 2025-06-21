# Project Changelog

All notable changes to the Contractor Source Headless WordPress/Next.js project will be documented in this file.

## [2025-01-14] - Next.js Frontend Integration with WordPress URL

### Added
- Created PHP-based reverse proxy system to serve Next.js frontend through WordPress URL
- Implemented intelligent routing that preserves WordPress admin and API endpoints
- Added fallback page when Next.js server is offline with setup instructions

### Changed
- Modified `/home/master/applications/gqtwwdgrww/public_html/index.php` to act as a router:
  - Routes WordPress-specific paths (wp-admin, wp-content, graphql, etc.) to WordPress
  - Proxies all other requests to Next.js running on localhost:3000
  - Handles headers, POST data, and response codes properly
- Created index-wp.php (original WordPress index) and index-nextjs.php (proxy logic)
- Updated .htaccess to ensure requests go through the custom index.php

### Technical Details
- **Proxy Implementation**:
  - Uses cURL to forward requests to Next.js server
  - Preserves request methods, headers, and POST data
  - Handles missing getallheaders() function for compatibility
  - Sets proper forwarding headers (X-Forwarded-Host, X-Forwarded-Proto, X-Real-IP)
- **WordPress Paths Preserved**:
  - /wp-admin, /wp-login.php, /wp-content, /wp-includes
  - /wp-json, /graphql, /graphql-ide
  - All .php files except index.php
- **Current Status**: 
  - Next.js server must be running on port 3000
  - Proxy successfully serves Next.js content at https://woocommerce-1475440-5585552.cloudwaysapps.com/
  - Frontend fully accessible while maintaining WordPress admin functionality

### Session Context
- User requested Next.js frontend to be accessible at WordPress URL
- Implemented PHP-based proxy solution that works within Cloudways constraints
- Solution maintains WordPress functionality while serving Next.js as primary frontend

## [2025-01-14] - Documentation Cleanup

### Changed
- Cleaned up `/home/master/docs/` directory for better organization and clarity
- Updated `project-structure.md` to reflect actual project structure:
  - Corrected frontend location to `/contractor-source-frontend/` (not planned structure)
  - Added accurate technology stack details (Next.js 15.3.3, React 19.0.0, etc.)
  - Included actual development commands and key URLs
  - Simplified directory tree to show real structure
- Updated `CLAUDE.md` to be more concise and focused:
  - Reduced from 146 lines to 57 lines
  - Kept only essential commands and quick references
  - Removed redundant information already in project-structure.md
  - Focused on development workflow and important notes

### Removed
- Deleted 8 unnecessary documentation files:
  - `api-schema.md` - GraphQL schema documentation (outdated)
  - `changelog-prompt.md` - Changelog template (no longer needed)
  - `component-specifications.md` - Visual design system
  - `component-templates.md` - React component boilerplate
  - `documentation-index.md` - Documentation guide
  - `nextjs-setup.md` - Setup instructions
  - `requirements.md` - Feature specifications
  - `test.md` - Test documentation file

### Technical Details
- **Files kept**: 3 essential documentation files
  - `changelog.md` - Project history (this file, untouched as requested)
  - `project-structure.md` - Accurate project structure and setup
  - `CLAUDE.md` - Quick reference for development
- **Purpose**: Simplify documentation to make it easier to understand the project at a glance
- **Result**: Documentation reduced from 11 files to 3 focused files

### Session Context
- User requested cleanup of docs folder after reviewing previous work
- Kept only changelog.md, project-structure.md, and CLAUDE.md
- Made documentation more accurate and easier to comprehend

## [2025-01-14] - CSS Loading and Frontend Server Issues Resolution

### Fixed
- **CSS Loading Issue**: Fixed Tailwind CSS v4 compatibility issues that caused unstyled white screen
  - Updated `globals.css` to use new `@import "tailwindcss"` syntax instead of old directives
  - Replaced incompatible utility classes (`border-border`, `font-display`) with CSS variables and inline styles
  - Fixed custom theme configuration for v4 using `@theme` directive
  
- **Caching Issues**: Resolved aggressive caching preventing frontend updates
  - Disabled Breeze plugin in database (`wp plugin deactivate breeze`)
  - Set `WP_CACHE` to false in wp-config.php
  - Renamed advanced-cache.php to prevent caching
  - Added cache-busting headers to PHP proxy
  
- **GraphQL Product Loading**: Fixed multiple GraphQL query issues
  - Removed invalid `where` parameter from products query
  - Added inline fragments for ProductUnion types (SimpleProduct, VariableProduct, etc.)
  - Fixed data extraction to use `edges.map(edge => edge.node)`
  - Added comprehensive error logging to Apollo client
  
- **Hydration Mismatches**: Fixed React hydration errors caused by browser extensions
  - Added `suppressHydrationWarning` to form elements affected by LastPass

- **Next.js Port Conflict**: Resolved server running on wrong port
  - Next.js was running on port 3002 instead of 3000 due to port conflict
  - Updated PHP proxy script to use port 3002
  - Killed conflicting process on port 3000 for future use

### Changed
- **PHP Proxy Configuration**: Updated `/home/master/applications/gqtwwdgrww/public_html/index-nextjs.php`
  - Changed `$nextjs_port` from 3000 to 3002 to match running server
  - Added debugging headers to track routing status

### Technical Details
- **Tailwind CSS v4 Migration**:
  - New syntax uses `@import "tailwindcss"` instead of `@tailwind base/components/utilities`
  - Theme configuration now uses `@theme` directive with CSS custom properties
  - Some utility classes deprecated in v4 require direct CSS or inline styles
  
- **GraphQL Query Updates**:
  - WooCommerce GraphQL requires inline fragments for union types
  - Products must be accessed via `products.edges[].node` structure
  - Each product type (Simple, Variable, External, Group) needs its own fragment

- **Port Configuration**:
  - Next.js automatically uses next available port when default is in use
  - Server log shows: "Port 3000 is in use, using available port 3002 instead"
  - PHP proxy must match the actual running port

### Session Context
- User reported multiple frontend issues in sequence
- Provided screenshots showing CSS not loading and console errors
- Explicitly requested disabling all caching mechanisms
- Final issue was "Frontend Server Offline" due to port mismatch
- All issues now resolved with frontend fully functional

## [2025-01-14] - Next.js Frontend Initialization

### Added
- Created Next.js 15.3.3 project with TypeScript, Tailwind CSS, and App Router
- Installed production dependencies:
  - Apollo Client 3.13.8 for GraphQL data fetching
  - React Hook Form 7.57.0 with Zod for form handling
  - Framer Motion 12.18.1 for animations
  - Headless UI and Heroicons for UI components
  - Sharp 0.34.2 for image optimization
- Configured development tooling:
  - GraphQL Code Generator for type safety
  - Prettier with Tailwind CSS plugin for code formatting
  - ESLint with Next.js and Prettier configs
- Created comprehensive documentation:
  - `component-specifications.md` - Visual design system with color palette, typography, and component layouts
  - `component-templates.md` - React component boilerplate and patterns
  - `nextjs-setup.md` - Complete setup instructions and configuration guide
  - `documentation-index.md` - Guide to all documentation files
- Set up project structure:
  - Apollo Client configuration with caching policies
  - GraphQL queries for products, categories, and content
  - TypeScript types for products and API responses
  - Utility functions for common operations
  - Custom Tailwind configuration with stone-inspired design tokens
- Implemented initial homepage with:
  - Hero section with gradient background
  - Featured products grid fetching from WordPress GraphQL
  - Call-to-action section
  - Responsive design with mobile-first approach

### Changed
- Updated `tailwind.config.ts` with custom color palette, fonts, and animations
- Modified `next.config.ts` with image optimization and security headers
- Replaced default Next.js styles with optimized global CSS including custom utility classes
- Enhanced `layout.tsx` with custom fonts (Inter, Playfair Display) and comprehensive metadata

### Technical Details
- **Files created in `/home/master/contractor-source-frontend/`**:
  - `.env.local` - Environment variables for WordPress GraphQL endpoint
  - `src/lib/apollo/client.ts` - Apollo Client setup with cache configuration
  - `src/lib/apollo/provider.tsx` - React context provider for Apollo
  - `src/lib/apollo/queries.ts` - GraphQL queries for products and content
  - `src/types/product.ts` - TypeScript interfaces for product data
  - `src/lib/utils/helpers.ts` - Utility functions (cn, formatPrice, etc.)
  - `src/app/page.tsx` - Homepage with GraphQL data fetching
  - `src/app/globals.css` - Optimized global styles (246 lines)
  - Configuration files: `.prettierrc`, `.eslintrc.json`, `codegen.ts`
- **Dependencies**: 25 production packages, 11 dev packages
- **Performance optimizations**:
  - Image optimization with next/image and Sharp
  - Font optimization with next/font
  - CSS performance with Tailwind CSS v4
  - GraphQL query caching with Apollo Client

### Session Context
- User requested "best of the best" implementation with top performance
- Created blazing-fast Next.js setup with all modern best practices
- Established connection to WordPress GraphQL API
- Ready to build layout components and product pages

## [2025-01-14] - Test Documentation Workflow

### Added
- Created `test.md` - Test file to demonstrate changelog update process
  - Simple test documentation file
  - Verifies changelog workflow functionality

### Technical Details
- Files created:
  - `/home/master/docs/test.md` (11 lines) - Test documentation file
- Purpose: Testing the changelog update process as requested by user

### Session Context
- User requested creation of test.md to demonstrate how to update changelog in future sessions
- Successfully demonstrated the workflow of reading changelog-prompt.md and updating changelog.md

## [2025-01-14] - Initial Documentation Setup

### Added
- Created `/home/master/docs/` directory for centralized documentation management
- Added `CLAUDE.md` - WordPress/WooCommerce development guide with:
  - WP-CLI commands for database, plugin, and maintenance operations
  - Build commands for WPGraphQL IDE and JWT Authentication plugins
  - Dual-site architecture explanation (gqtwwdgrww and yftjggardt applications)
  - Server environment details (Cloudways, PHP 8.1, MariaDB 10.6.22)
- Added `requirements.md` - Technical specifications including:
  - Product catalog requirements for stone/slab inventory
  - Quote request system (not e-commerce transactions)
  - Search and filtering capabilities
  - Performance targets and SEO requirements
  - Future enhancement roadmap
- Added `api-schema.md` - Complete GraphQL schema documentation:
  - Product queries with custom stone-specific fields (dimensions, finish, origin)
  - Quote request mutations
  - Blog/content queries
  - Authentication patterns
- Added `project-structure.md` - Next.js application architecture:
  - App Router structure (Next.js 14+)
  - Component organization strategy
  - Data fetching patterns
  - Performance optimization approach
- Added `changelog-prompt.md` - Template for generating consistent changelog entries
- Added `changelog.md` - This file, tracking all project changes

### Changed
- Reorganized documentation structure by moving all .md files from `/home/master/` to `/home/master/docs/`

### Technical Details
- **WordPress Environment**: 
  - Two WooCommerce installations on Cloudways
  - GraphQL API enabled via WPGraphQL and WPGraphQL WooCommerce
  - Performance stack: Breeze cache, Object Cache Pro, Varnish
- **Documentation Files Created**:
  - `/home/master/docs/CLAUDE.md` (146 lines) - Development commands and architecture
  - `/home/master/docs/requirements.md` (378 lines) - Feature specifications
  - `/home/master/docs/api-schema.md` (436 lines) - API contracts
  - `/home/master/docs/project-structure.md` (413 lines) - Frontend architecture
  - `/home/master/docs/changelog-prompt.md` (104 lines) - Changelog template
- **Project Scope**: B2B catalog for granite/quartz slabs with quote requests, not direct sales

### Session Context
- User requested organization of .md files into a dedicated folder
- Established need for tracking detailed file changes across sessions
- Created changelog system to maintain project history and decision tracking
- Ensured all documentation interconnects for comprehensive project understanding