import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import Mux from "@mux/mux-node";
import fs from "fs";
import path from "path";

// Initialize Mux client
const muxClient = new Mux({
  tokenId: process.env.MUX_TOKEN_ID || "",
  tokenSecret: process.env.MUX_TOKEN_SECRET || "",
});

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Mux API route to get or create asset
  app.post("/api/mux/get-or-create-asset", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { fileName } = req.body;
      
      if (!fileName) {
        return res.status(400).json({ error: "File name is required" });
      }
      
      // Get the file path
      const filePath = path.join(process.cwd(), "attached_assets", fileName);
      
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "File not found", path: filePath });
      }
      
      // Create a direct upload
      const upload = await muxClient.video.uploads.create({
        cors_origin: "*",
        new_asset_settings: {
          playback_policy: ["public"],
        },
      });
      
      // Read the file
      const fileBuffer = fs.readFileSync(filePath);
      
      // Upload the file to Mux
      await muxClient.video.uploads.direct(upload.id, fileBuffer, fileName);
      
      // Wait for the upload to complete and get the asset
      const checkUpload = async () => {
        const uploadResponse = await muxClient.video.uploads.get(upload.id);
        
        if (uploadResponse.asset_id) {
          const asset = await muxClient.video.assets.get(uploadResponse.asset_id);
          
          if (asset.playback_ids && asset.playback_ids.length > 0) {
            return {
              assetId: asset.id,
              playbackId: asset.playback_ids[0].id,
            };
          }
        }
        
        // If still processing, wait and try again
        await new Promise(resolve => setTimeout(resolve, 1000));
        return checkUpload();
      };
      
      const assetInfo = await checkUpload();
      
      res.status(200).json(assetInfo);
    } catch (error) {
      console.error("Mux API error:", error);
      next(error);
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
