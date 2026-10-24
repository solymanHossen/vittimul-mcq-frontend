import { NextResponse, type NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import {
  authConfig,
  isAdminRoute,
  isAuthRoute,
  isProtectedRoute,
} from "./auth.config"

export async function proxy(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  })

  const { pathname } = request.nextUrl

  // 1. Authenticated users visiting guest auth routes (/login, /register, etc.) are redirected to dashboard
  if (isAuthRoute(pathname) && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // 2. Admin routes require an authenticated user with ADMIN or SUPER_ADMIN role
  if (isAdminRoute(pathname)) {
    if (!token) {
      const signInUrl = new URL(authConfig.pages.signIn, request.url)
      signInUrl.searchParams.set(
        "callbackUrl",
        `${pathname}${request.nextUrl.search}`
      )
      return NextResponse.redirect(signInUrl)
    }

    if (token.role !== "ADMIN" && token.role !== "SUPER_ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  // 3. Protected user routes (/dashboard, /exams, /profile, etc.) require active session
  if (isProtectedRoute(pathname) && !token) {
    const signInUrl = new URL(authConfig.pages.signIn, request.url)
    signInUrl.searchParams.set(
      "callbackUrl",
      `${pathname}${request.nextUrl.search}`
    )
    return NextResponse.redirect(signInUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js)).*)",
  ],
}
