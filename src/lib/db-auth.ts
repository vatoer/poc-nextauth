import { PrismaClient } from "@/prisma/db-auth/generated/client";

declare global {
  var prismaDbAuth: PrismaClient | undefined;
}

export const dbAuth = global.prismaDbAuth || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prismaDbAuth = dbAuth;
