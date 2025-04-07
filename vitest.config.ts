/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'; // We need this plugin even though we removed Vite for the app itself

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Simulate browser environment for React components
    setupFiles: './vitest.setup.ts', // Optional setup file (we'll create a basic one)
    css: true, // Enable CSS processing if needed for component styles
  },
});
