/**
 * An array of public routes.
 * These routes are accessible to all users.
 *
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/", "/informasi", "/reset-password"];

/**
 * An array of routes that are use for authentication.
 *
 * @type {string[]}
 */
export const authRoutes: string[] = ["/login", "/buat-akun"];

/**
 * The prefix for the API routes.
 * This is route will always open to the public because it is used for authentication.
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default route for the application after a user logs in.
 */
export const DEFAULT_ROUTE_AFTER_LOGIN = "/";

export const ROUTE_PENDAFTARAN = "/pendaftaran";
