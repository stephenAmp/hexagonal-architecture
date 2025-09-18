import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,   // comes from .env
    },
  },
  log: ["query", "error", "warn"],
});
