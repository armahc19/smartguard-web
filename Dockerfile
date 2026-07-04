# -------------------------
# Stage 1 - Build
# -------------------------
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy dependency files
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source
COPY . .

# Build for Node server
ENV NITRO_PRESET=node-server
RUN bun run build

# -------------------------
# Stage 2 - Production
# -------------------------
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV NITRO_PRESET=node-server
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy Nitro output
COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]