// middleware.ts
import { auth } from "@/auth/auth";
import authConfig from "@/auth/auth.config";
import {
  DEFAULT_ROUTE_AFTER_LOGIN,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import NextAuth from "next-auth";

// const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // console.log("[MIDDLEWARE]", req.nextUrl.pathname);
  // console.log("[IS LOGGED IN]", isLoggenIn);

  const { nextUrl } = req;
  const isLoggenIn = !!req.auth;

  console.log("[IS LOGGED IN]", isLoggenIn);


  console.log("[MIDDLEWARE]", nextUrl.pathname);
  console.log("[MIDDLEWARE PATHNAME]", nextUrl.pathname.split("/"));

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  // check if the route is a public route or sub route
  const isPublicRoute =
    publicRoutes.includes(nextUrl.pathname) ||
    publicRoutes.some(
      (route) => nextUrl.pathname.startsWith(route) && route !== "/"
    );

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // if the route is an Auth route, we don't need to redirect
  if (isApiAuthRoute) {
    return;
  }

  // if the route is an Auth route and is log in, redirect to the default route
  if (isAuthRoute) {
    if (isLoggenIn) {
      return Response.redirect(new URL(DEFAULT_ROUTE_AFTER_LOGIN, nextUrl));
    }
    return;
  }

  if (!isLoggenIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }
  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
