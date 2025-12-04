# Overview updated

This is a full-stack web application built with React, Express, and TypeScript. The project appears to be a corporate website for AMY Technology LLC, showcasing AI and technology solutions. The application uses a modern tech stack with Vite for frontend bundling, shadcn/ui for UI components, and Drizzle ORM for database management. The architecture follows a monorepo structure with shared code between client and server.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Bundling**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, chosen for fast hot module replacement and optimized production builds
- Wouter for lightweight client-side routing instead of React Router

**UI Component System**
- shadcn/ui component library built on Radix UI primitives
- TailwindCSS for utility-first styling with custom design tokens
- Component variants managed through class-variance-authority (cva)
- Design system configured in "new-york" style with neutral base colors

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management
- Custom query client with automatic error handling and retry logic
- 401 responses handled gracefully with configurable behavior
- Infinite stale time to minimize unnecessary refetches

**Form Handling**
- React Hook Form for performant form state management
- Zod for runtime validation via @hookform/resolvers
- Form components integrated with shadcn/ui design system

## Backend Architecture

**Server Framework**
- Express.js for HTTP server and routing
- TypeScript for type safety across the codebase
- Custom middleware for request logging and JSON response capturing

**Storage Layer**
- In-memory storage implementation (MemStorage) as the default storage interface
- Abstracted IStorage interface allows easy swapping to database-backed storage
- User management with CRUD operations (getUser, getUserByUsername, createUser)

**Development Experience**
- Vite middleware integration in development mode for seamless HMR
- Custom error handling middleware for consistent API responses
- Request/response logging with duration tracking for API endpoints

## Database Design

**ORM & Schema**
- Drizzle ORM for type-safe database queries and migrations
- PostgreSQL as the target database dialect
- Schema defined in shared directory for reuse across client and server

**User Schema**
- Users table with UUID primary keys (auto-generated via gen_random_uuid())
- Username field with unique constraint
- Password field for authentication (plain storage - should be hashed in production)
- Zod schema validation integrated with Drizzle for runtime type safety

**Migration Strategy**
- Migrations output to ./migrations directory
- Schema source in ./shared/schema.ts for cross-cutting concerns
- Connection via DATABASE_URL environment variable with @neondatabase/serverless driver

## Build & Deployment

**Build Process**
- Client: Vite builds to dist/public for static assets
- Server: esbuild bundles server code to dist/index.js with ESM format
- Separate development and production modes with different entry points

**Environment Configuration**
- NODE_ENV for environment detection
- DATABASE_URL required for database connections
- REPL_ID detection for Replit-specific plugins and features

# External Dependencies

**Database & ORM**
- @neondatabase/serverless - Serverless Postgres driver for Neon database
- drizzle-orm - Type-safe ORM with query builder
- drizzle-kit - CLI for migrations and schema management
- connect-pg-simple - PostgreSQL session store (installed but not currently used)

**UI Framework**
- @radix-ui/* - Unstyled, accessible component primitives (accordion, dialog, dropdown, tooltip, etc.)
- tailwindcss - Utility-first CSS framework
- class-variance-authority - Variant-based component styling
- embla-carousel-react - Carousel/slider component
- lucide-react - Icon library

**Development Tools**
- @replit/vite-plugin-runtime-error-modal - Error overlay for development
- @replit/vite-plugin-cartographer - Code navigation in Replit
- @replit/vite-plugin-dev-banner - Development mode indicator

**Forms & Validation**
- react-hook-form - Form state management
- zod - Schema validation
- @hookform/resolvers - Bridge between react-hook-form and zod

**Utilities**
- date-fns - Date manipulation library
- clsx & tailwind-merge - Utility class merging
- nanoid - Unique ID generation