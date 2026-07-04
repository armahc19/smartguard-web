FROM oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .

ENV NITRO_PRESET=node-server
ENV HOST=0.0.0.0
ENV PORT=3000

RUN bun run build


FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy the generated Nitro production build
COPY --from=builder /app/.output ./.output

EXPOSE 3000

# FIX: Execute index.mjs, which boots up the actual HTTP server
CMD ["node", ".output/server/index.mjs"]
