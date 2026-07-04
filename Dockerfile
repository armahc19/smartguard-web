# Use Bun for building
FROM oven/bun:1.2-alpine AS builder
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .

# Set Nitro presets for a standard server
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server

# FIX: Force Vite to build using standard TanStack presets instead of the Lovable Cloudflare wrapper
RUN bun run build

# Runner stage using a standard Node engine
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=builder /app/.output ./.output

EXPOSE 3000

# Run the verified index.mjs server file
CMD ["node", ".output/server/index.mjs"]
