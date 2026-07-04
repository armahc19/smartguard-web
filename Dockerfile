# Use the exact same engine you code with
FROM oven/bun:1.2-alpine

WORKDIR /app

# Set target configurations
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy lock files and install dependencies exactly using Bun
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy everything else and execute the Vite / Nitro compilation
COPY . .
RUN bun run build

EXPOSE 3000

# Start up using Bun directly to handle execution smoothly
CMD ["bun", "run", "start"]