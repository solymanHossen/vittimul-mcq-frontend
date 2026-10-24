export const authConfig = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
} as const

/** Routes reserved for guests (unauthenticated users). Authenticated users are redirected to /dashboard. */
export const authRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
] as const

/** Routes requiring authentication. */
export const protectedRoutes = [
  "/dashboard",
  "/exams",
  "/practice",
  "/profile",
  "/settings",
] as const

export function isAuthRoute(pathname: string): boolean {
  return authRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  )
}

export function isProtectedRoute(pathname: string): boolean {
  return (
    protectedRoutes.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    ) || pathname.startsWith("/admin")
  )
}

export function isAdminRoute(pathname: string): boolean {
  return pathname === "/admin" || pathname.startsWith("/admin/")
}
