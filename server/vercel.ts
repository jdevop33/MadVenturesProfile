// Vercel Serverless API Handler
import express from 'express';
import { registerRoutes } from './routes';

// Initialize Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
registerRoutes(app);

// Export Vercel serverless handler
export default async function handler(req, res) {
  // Adapt Vercel requests to Express
  return new Promise((resolve, reject) => {
    // Create Express response object with Vercel's res methods
    const expressRes = {
      ...res,
      status: (code) => {
        res.status(code);
        return expressRes;
      },
      json: (data) => {
        res.json(data);
        resolve();
        return expressRes;
      },
      send: (body) => {
        res.send(body);
        resolve();
        return expressRes;
      },
      end: (chunk) => {
        res.end(chunk);
        resolve();
        return expressRes;
      },
      setHeader: (name, value) => {
        res.setHeader(name, value);
        return expressRes;
      }
    };

    // Process request with Express
    app(req, expressRes, (err) => {
      if (err) {
        console.error('Express error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        reject(err);
      } else {
        // If no route matched, return 404
        if (!res.writableEnded) {
          res.status(404).json({ error: 'Not Found' });
        }
        resolve();
      }
    });
  });
} 