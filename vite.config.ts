import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    middlewareMode: false,
    fs: {
      strict: false,
    },
  },
  // Ensure .mp4 files are served with the correct MIME type
  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.ogg'],
})
