# Step 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Set Nitro preset to node-server so it builds a Node app instead of Cloudflare worker
ENV NITRO_PRESET=node-server

# Build the app
RUN npm run build

# Step 2: Production stage
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NITRO_PRESET=node-server

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]