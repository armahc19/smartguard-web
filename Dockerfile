# --- BUILD STAGE ---
FROM oven/bun:1.2-alpine AS builder
WORKDIR /app

# Copy dependency configuration files
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy your full codebase
COPY . .

# Explicitly trigger production compilation variables
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server

# Compile your code into production chunks
RUN bun run build

# --- RUNNER STAGE ---
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy the entire build workspace created by your Lovable/TanStack build configurations
COPY --from=builder /app/.output ./.output

EXPOSE 3000

# FIX: Run index.js instead of index.mjs
CMD ["node", ".output/server/index.js"]
