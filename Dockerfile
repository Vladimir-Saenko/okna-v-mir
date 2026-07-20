# 1. Этап установки зависимостей (Dependencies)
FROM node:24-slim AS deps
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock / pnpm-lock.yaml)
COPY package.json package-lock.json ./
RUN npm ci --force

# 2. Этап сборки (Builder)
FROM node:24-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Сборка приложения (генерирует папку .next)
RUN npm run build

# 3. Этап запуска (Runner)
FROM node:24-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Не запускайте приложение от имени root-пользователя (стандарт безопасности)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем скомпилированное приложение и зависимости
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

# Запуск стандартного сервера Next.js
CMD ["npm", "start"]

