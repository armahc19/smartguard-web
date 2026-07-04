# Use the official Bun image for both building and running
FROM oven/bun:1.2-alpine AS base
WORKDIR /app

# Install dependencies using Bun cache benefits
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy project source files 
COPY . .

# Force the environment variable to node-server for production bundling
ENV NITRO_PRESET=node-server
ENV NODE_ENV=production

# Compile the TanStack Start production build
RUN bun run build

# Expose the web-server port internally
EXPOSE 3000

# Set target network routing variables
ENV HOST=0.0.0.0
ENV PORT=3000

# Execute the primary output entrypoint file via Bun's fast node-compatibility layer
CMD ["bun", ".output/server/index.mjs"]
