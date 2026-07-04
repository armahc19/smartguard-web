import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as routerPlugin from '@tanstack/router-plugin'

const TanStackRouterVite = ((routerPlugin as any).TanStackRouterVite ?? (routerPlugin as any).default ?? routerPlugin) as any

// If building inside Docker, bypass Lovable's Cloudflare preset force-override
const config = {
  plugins: [
    TanStackRouterVite(),
    react(),
  ],
  // Ensure nitro configuration reads our environment variable correctly
  nitro: {
    preset: process.env.NITRO_PRESET || 'cloudflare-pages'
  }
} as any

export default defineConfig(config)
