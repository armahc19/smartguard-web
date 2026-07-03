FROM node:20-alpine

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