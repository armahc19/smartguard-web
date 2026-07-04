# Use the stable Bun engine
FROM oven/bun:1.2-alpine

WORKDIR /app

# Force production mode
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy lockfiles and install dependencies flawlessly
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy codebase
COPY . .

# Compile your pure Vite SPA assets (defaults to outputting into the /dist folder)
RUN bun run build

EXPOSE 3000

# Fire up the static preview server
CMD ["bun", "run", "start"]