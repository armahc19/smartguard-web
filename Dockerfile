# -------------------------
# Stage 1 - Build
# -------------------------
FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .

ENV NITRO_PRESET=node-server
RUN bun run build


# -------------------------
# Stage 2 - Runtime
# -------------------------
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# IMPORTANT: copy FULL output
COPY --from=builder /app/.output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]