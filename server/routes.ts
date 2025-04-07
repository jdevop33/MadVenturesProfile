import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // This is a static site with no API routes needed
  // Add API routes here if needed in the future

  const httpServer = createServer(app);
  return httpServer;
}
