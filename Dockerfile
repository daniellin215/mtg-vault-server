# Stage 1: Development
# https://hub.docker.com/_/node
FROM node:20 as development
# Create and change to the app directory.
WORKDIR /app
# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package.json package-lock.json ./
RUN npm install
# # Copy local code to the container image.
# COPY . .
# Run the web service on container startup.
CMD ["npm", "run", "dev"]

# Stage 2: Production
FROM node:alpine as production
WORKDIR /app
COPY --from=development /app/dist ./dist
RUN npm install --only=production
COPY . .
CMD ["node", "dist/index.js"]
