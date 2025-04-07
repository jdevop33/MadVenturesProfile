#!/usr/bin/env node

import { spawn } from 'child_process';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// Kill child processes when this process exits
const childProcesses = [];
process.on('exit', () => {
  console.log('Shutting down all child processes...');
  for (const child of childProcesses) {
    child.kill();
  }
});

// Also handle SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down...');
  process.exit(0);
});

// Start Next.js development server
const nextProcess = spawn('next', ['dev'], {
  cwd: root,
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    PORT: process.env.PORT || '3000',
  },
});

childProcesses.push(nextProcess);
nextProcess.on('close', (code) => {
  console.log(`Next.js process exited with code ${code}`);
  process.exit(code);
});

// Start API server with ts-node
const apiProcess = spawn(
  'node', 
  ['--loader', 'ts-node/esm', 'server/index.ts'], 
  {
    cwd: root,
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      PORT: process.env.API_PORT || '5000',
    },
  }
);

childProcesses.push(apiProcess);
apiProcess.on('close', (code) => {
  console.log(`API server process exited with code ${code}`);
  process.exit(code);
}); 