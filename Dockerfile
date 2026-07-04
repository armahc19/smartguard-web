# 1. Use Node 22 Alpine to match your environment
FROM node:22-alpine

WORKDIR /app

# 2. Force Nitro to build a standard node server instead of a Cloudflare worker
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server
ENV HOST=0.0.0.0
ENV PORT=3000

# 3. Copy package files first to cache dependencies
COPY package*.json ./

# 4. Install all dependencies needed for the build and execution
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Build the TanStack / Nitro project
RUN npm run build

# 7. Expose the internal port
EXPOSE 3000

# 8. Start the production server using the script we just added
CMD ["npm", "run", "start"]