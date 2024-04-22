import { PrismaClient } from '@prisma/client'
declare global {
  var prismaDbAuth: PrismaClient | undefined;
}

export const dbAuth = global.prismaDbAuth || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prismaDbAuth = dbAuth;
