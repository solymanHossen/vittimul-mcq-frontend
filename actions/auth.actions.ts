"use server"

import { redirect } from "next/navigation"
import api from "@/lib/api"
import {
  registerSchema,
  verifyEmailSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from "@/lib/validators"

function isRedirectError(e: unknown): boolean {
  return Boolean(
    e &&
    typeof e === "object" &&
    "digest" in e &&
    typeof (e as { digest: unknown }).digest === "string" &&
    (e as { digest: string }).digest.startsWith("NEXT_REDIRECT")
  )
}

function getErrorMessage(e: unknown, fallback: string): string {
  if (e && typeof e === "object" && "response" in e) {
    const res = (e as { response?: { data?: { message?: string } } }).response
    if (res?.data?.message) return res.data.message
  }
  if (e instanceof Error) return e.message
  return fallback
}

// ─── Register ─────────────────────────────────────────
export async function registerAction(_state: unknown, formData: FormData) {
  const parsed = registerSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success)
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" }

  try {
    await api.post("/auth/register", parsed.data)
    redirect(`/verify-email?email=${encodeURIComponent(parsed.data.email)}`)
  } catch (e: unknown) {
    if (isRedirectError(e)) throw e
    return { error: getErrorMessage(e, "Registration failed") }
  }
}

// ─── Verify Email OTP ─────────────────────────────────
export async function verifyEmailAction(_state: unknown, formData: FormData) {
  const parsed = verifyEmailSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success)
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" }

  try {
    await api.post("/auth/verify-email", parsed.data)
    redirect("/login?verified=true")
  } catch (e: unknown) {
    if (isRedirectError(e)) throw e
    return { error: getErrorMessage(e, "Invalid or expired OTP") }
  }
}

// ─── Resend OTP ───────────────────────────────────────
export async function resendOTPAction(email: string) {
  try {
    await api.post("/auth/resend-otp", { email })
    return { success: true }
  } catch (e: unknown) {
    return { error: getErrorMessage(e, "Failed to resend") }
  }
}

// ─── Forgot Password ──────────────────────────────────
export async function forgotPasswordAction(
  _state: unknown,
  formData: FormData
) {
  const parsed = forgotPasswordSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success)
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" }

  try {
    await api.post("/auth/forgot-password", parsed.data)
    return { success: true }
  } catch (e: unknown) {
    return { error: getErrorMessage(e, "Email not found") }
  }
}

// ─── Reset Password ───────────────────────────────────
export async function resetPasswordAction(
  token: string,
  _state: unknown,
  formData: FormData
) {
  const parsed = resetPasswordSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success)
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" }

  try {
    await api.post(`/auth/reset-password/${token}`, parsed.data)
    redirect("/login?reset=true")
  } catch (e: unknown) {
    if (isRedirectError(e)) throw e
    return { error: getErrorMessage(e, "Reset failed or link expired") }
  }
}
