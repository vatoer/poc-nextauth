import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { dbAuth } from "@/drizzle/db-auth";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(dbAuth),
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  ...authConfig,
});
