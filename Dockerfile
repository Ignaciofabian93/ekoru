# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm ci

COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22-alpine

# Install OpenSSL for Prisma
RUN apk add --no-cache openssl

WORKDIR /app

# Copy package files
COPY package.json ./

COPY package-lock.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built application from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

CMD [ "npm", "start" ]

EXPOSE 3000