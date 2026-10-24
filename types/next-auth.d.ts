import "next-auth"
import "next-auth/jwt"

export type UserRole =
  "USER" | "STUDENT" | "INSTRUCTOR" | "MODERATOR" | "ADMIN" | "SUPER_ADMIN"

export interface SafeUser {
  id: string | number
  email: string
  name?: string | null
  role: UserRole
  isActive: boolean
  createdAt?: string | Date
  updatedAt?: string | Date
}

declare module "next-auth" {
  interface User {
    id: string
    email: string
    name?: string | null
    role: UserRole
    isActive: boolean
    accessToken: string
  }

  interface Session {
    user: {
      id: string
      name?: string | null
      email: string
      role: UserRole
      isActive: boolean
    }
    accessToken: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: UserRole
    isActive: boolean
    accessToken: string
  }
}
