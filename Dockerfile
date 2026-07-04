# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy lockfiles and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy codebase
COPY . .

# Build the Vite SPA
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy the built assets from the build stage to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Overwrite the default Nginx config to support SPA routing (fallback to index.html)
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]