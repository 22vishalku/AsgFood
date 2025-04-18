# Step 1: Build the app
FROM node:22.1.0 as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Step 2: Serve the app with a static server
FROM node:22.1.0

WORKDIR /app

RUN npm install -g serve

# Copy built app from previous stage
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
