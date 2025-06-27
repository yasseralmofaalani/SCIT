# SCIT Corporate Website

## Overview

This project is a corporate website for the Syrian Company for Information Technology (SCIT), built as a full-stack web application using React with TypeScript on the frontend and Express.js on the backend. The application is configured for deployment on Replit and uses PostgreSQL with Drizzle ORM for data persistence.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Library**: Built on shadcn/ui with Radix UI primitives
- **Styling System**: Tailwind CSS with custom Arabic typography (HTHeliopolis font)
- **Layout**: Responsive design with RTL (right-to-left) support for Arabic content
- **State Management**: TanStack Query for API data management
- **Toast Notifications**: Radix UI toast system for user feedback

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Routes**: RESTful API structure with `/api` prefix
- **Storage Layer**: Abstracted storage interface with memory storage implementation
- **Middleware**: Request logging, JSON parsing, and error handling
- **Development**: Hot reload with Vite integration in development mode

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **ORM**: Drizzle ORM with Zod validation schemas
- **Migrations**: Database migrations managed through Drizzle Kit

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle requests and interact with storage layer
3. **Storage Layer**: Abstracted interface allows switching between memory and database storage
4. **Response**: JSON responses sent back to client with proper error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **zod**: Schema validation

### UI Dependencies
- **@radix-ui/***: Comprehensive set of unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

### Development Dependencies
- **vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for server
- **esbuild**: Production server bundling

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

### Build Process
1. **Development**: `npm run dev` - Runs server with hot reload
2. **Production Build**: `npm run build` - Builds client and server bundles
3. **Production Start**: `npm run start` - Runs production server

### Environment Configuration
- **Database**: PostgreSQL 16 configured through Replit modules
- **Port Configuration**: Server runs on port 5000, exposed as port 80
- **Static Assets**: Client build outputs to `dist/public` directory

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Auto-scaling**: Configured for autoscale deployment target
- **File Handling**: Development files and build artifacts properly excluded

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```