import { getServerSession, type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"
import { loginSchema } from "@/lib/validators"
import api from "@/lib/api"
import type { SafeUser, UserRole } from "@/types/next-auth"

interface LoginResponsePayload {
  accessToken: string
  user: SafeUser
}

export const authOptions: NextAuthOptions = {
  pages: authConfig.pages,
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 }, // 30 days

  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "aspirant@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials)
        if (!parsed.success) return null

        try {
          const { data } = await api.post<LoginResponsePayload>("/auth/login", {
            email: parsed.data.email.toLowerCase(),
            password: parsed.data.password,
          })

          if (!data?.accessToken || !data?.user) {
            return null
          }

          return {
            id: String(data.user.id),
            name: data.user.name ?? "",
            email: data.user.email,
            role: data.user.role,
            isActive: Boolean(data.user.isActive),
            accessToken: data.accessToken,
          }
        } catch {
          return null
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role as UserRole
        token.isActive = user.isActive
        token.accessToken = user.accessToken
      }
      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as UserRole
        session.user.isActive = token.isActive as boolean
      }
      session.accessToken = token.accessToken as string
      return session
    },
  },

  secret:
    process.env.AUTH_SECRET ??
    process.env.NEXTAUTH_SECRET ??
    "vittimul-mcq-production-grade-secure-nextauth-secret-key-32chars",
}

export function auth() {
  return getServerSession(authOptions)
}
