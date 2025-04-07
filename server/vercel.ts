// Vercel Serverless API Handler
import express from 'express';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { registerRoutes } from './routes';

// Initialize Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
registerRoutes(app);

// Export Vercel serverless handler
export default async function handler(
  req: VercelRequest, 
  res: VercelResponse
): Promise<void> {
  // Simple proxy approach instead of trying to adapt request types
  return new Promise<void>((resolve, reject) => {
    // We'll just proxy the handler call and bypass type checking
    // This is safe because Express can handle the basic request/response properties
    const handler = app as any;
    
    // Create a wrapper for the response to handle completion
    const resWrapper = {
      ...res,
      end: function(chunk?: any) {
        res.end(chunk);
        resolve();
        return this;
      },
      send: function(body: any) {
        res.send(body);
        resolve();
        return this;
      },
      json: function(body: any) {
        res.json(body);
        resolve();
        return this;
      }
    };
    
    // Call the Express app with the Vercel request/response
    handler(req, resWrapper, (err: any) => {
      if (err) {
        console.error('Express error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        reject(err);
      } else {
        // If no route matched, return 404
        if (!res.writableEnded) {
          res.status(404).json({ error: 'Not Found' });
          resolve();
        }
      }
    });
  });
} 