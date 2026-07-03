# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy only the necessary files from builder
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json
# CRITICAL: Copy node_modules too!
COPY --from=builder /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Expose the application port
EXPOSE 3000

# Start the Nitro server
CMD ["node", ".output/server/index.mjs"]