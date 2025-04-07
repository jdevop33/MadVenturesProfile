# MAD Ventures Profile

Thomas Ahn's professional profile website showcasing MAD Ventures.

## Project Overview

This project is a Next.js application that was migrated from a Vite/React SPA. It uses:

- Next.js for server-rendered React
- React for UI components
- Tailwind CSS for styling
- Express API (via Next.js API routes)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Production Deployment to Vercel

### Automatic Deployment

This project is configured for seamless deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Use the following deployment settings:
   - Framework Preset: `Next.js`
   - Root Directory: `.`
   - Build Command: `npm run build`
   - Install Command: `npm install`

### Manual Deployment

You can also deploy manually using the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

## Project Structure

- `app/`: Next.js App Router components
  - `layout.tsx`: Root layout component
  - `[[...slug]]/`: Catch-all route for client-side SPA
- `client/`: Original React application (used within Next.js)
  - `src/`: React components and application logic
  - `public/`: Static assets (copied to Next.js public folder)
- `components/`: Shared React components
- `styles/`: Global styles
- `server/`: Backend Express server code
- `shared/`: Shared types and utilities
- `attached_assets/`: Media files and assets

## Migration Notes

This project has been migrated from Vite to Next.js. The migration strategy:

1. Initial migration keeps the existing client-side SPA intact by using Next.js as a wrapper
2. Future improvements will incrementally adopt Next.js features:
   - Server Components for better performance
   - Image optimization
   - API Routes to replace Express server

## Troubleshooting Deployment Issues

If you encounter deployment issues:

1. **Static Asset Issues**:
   - Assets are copied from `client/public` to `public` directory
   - Check if the copy-assets script ran before build

2. **Build Failures**:
   - Verify that all dependencies are properly installed
   - Check for any TypeScript errors with `npm run check`

3. **Client-Side Code Issues**:
   - The original React app is loaded with `dynamic` import and `ssr: false`
   - Check for client-side dependencies that might not be compatible with Next.js

4. **Environmental Variable Updates**:
   - All `VITE_` prefixed environment variables changed to `NEXT_PUBLIC_` 