# Use the minimal Node.js 22 image as the base image
FROM node:22-slim AS base

# Define the builder stage
FROM node:22-slim AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --force

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Copy all the files
COPY . .

# Build the Next.js app
RUN npm run build

# Set the working directory
WORKDIR /app

# Use image for the production stage
FROM node:22-slim AS production

# Copy the built files from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm ci --only=production

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]