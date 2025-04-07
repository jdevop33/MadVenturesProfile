# MAD Ventures Profile

Thomas Ahn's professional profile website showcasing MAD Ventures.

## Project Overview

This project is a static website built with:
- Vite for frontend build
- React for UI components
- Express for API routes (minimal usage)
- Tailwind CSS for styling

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Production Deployment to Vercel

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the project configuration
3. Use the following settings:
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

The `vercel.json` file contains all necessary configuration for proper routing and headers.

## Project Structure

- `client/`: Frontend React application
  - `src/`: React components and application logic
  - `public/`: Static assets
- `server/`: Backend Express server (minimal usage)
- `shared/`: Shared types and utilities
- `attached_assets/`: Media files and assets

## Production Optimizations

- Assets are configured with appropriate caching headers
- Security headers are implemented
- Static assets are served efficiently
- Client-side routing is properly handled 