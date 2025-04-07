# MAD Ventures Profile

Thomas Ahn's professional profile website showcasing MAD Ventures.

## Project Overview

This project is a static website built with:
- Vite for frontend build
- React for UI components
- Express for API routes
- Tailwind CSS for styling

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
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`
   - Framework Preset: `Other`

### Manual Deployment

You can also deploy manually using the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

### Deployment Configuration

The project includes a `vercel.json` file with all necessary configuration:
- Proper routing for API endpoints and client-side navigation
- Security headers
- Cache optimization
- Static file handling

## Project Structure

- `client/`: Frontend React application
  - `src/`: React components and application logic
  - `public/`: Static assets
- `server/`: Backend Express server
  - `routes.ts`: API endpoint definitions
  - `vercel.ts`: Serverless adapter for Vercel
- `shared/`: Shared types and utilities
- `attached_assets/`: Media files and assets

## Troubleshooting Deployment Issues

If you encounter deployment issues:

1. **API Routes Not Working**: 
   - Ensure `/api/*` routes in `vercel.json` are correctly configured
   - Check the serverless function logs in Vercel dashboard

2. **Build Failures**:
   - Verify that all dependencies are properly installed
   - Check for any TypeScript errors with `npm run check`
   - Ensure build scripts in `package.json` are correctly defined

3. **Static Assets Not Loading**:
   - Verify that paths in your code use relative paths
   - Check cache headers in `vercel.json`

4. **Routing Issues**:
   - Ensure `rewrites` in `vercel.json` are correctly configured
   - Remember that client-side routing needs proper fallback configuration

## Production Optimizations

- Assets have appropriate caching headers
- Security headers implemented
- Static assets optimized
- Client-side routing properly configured 