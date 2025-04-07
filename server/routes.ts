import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add a basic health check API endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });

  // This is a static site with minimal API routes needed
  // Add more API routes here if needed in the future

  const httpServer = createServer(app);
  return httpServer;
}
