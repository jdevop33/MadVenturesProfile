// Script to copy static assets from client directory to public directory
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories
const clientPublicDir = path.join(__dirname, '../client/public');
const nextPublicDir = path.join(__dirname, '../public');

// Create public directory if it doesn't exist
if (!fs.existsSync(nextPublicDir)) {
  fs.mkdirSync(nextPublicDir, { recursive: true });
}

// Copy files from client/public to public
function copyFiles(sourceDir, targetDir) {
  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory does not exist: ${sourceDir}`);
    return;
  }

  const files = fs.readdirSync(sourceDir);
  
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    
    const stat = fs.statSync(sourcePath);
    
    if (stat.isDirectory()) {
      // Create directory if it doesn't exist
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      // Copy files from subdirectory
      copyFiles(sourcePath, targetPath);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied: ${sourcePath} → ${targetPath}`);
    }
  });
}

// Execute copy
console.log('Copying assets from client/public to public...');
copyFiles(clientPublicDir, nextPublicDir);
console.log('Done copying assets!'); 