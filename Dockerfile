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


#FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]