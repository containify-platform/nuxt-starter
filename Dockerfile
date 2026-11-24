FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-alpine
WORKDIR /app
# .output is self-contained: Nitro bundles the server and the dependencies it needs.
# Containify sets HOST=::, so the server listens on IPv6 and IPv4. PORT is the port the
# HTTP endpoint points at.
ENV NODE_ENV=production \
    PORT=3000
COPY --from=build --chown=node:node /app/.output ./.output
USER node
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
