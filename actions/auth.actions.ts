"use server"

import { redirect } from "next/navigation"
import api from "@/lib/api"
import {
  registerSchema,
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
    const res = (e as { response?: { data?: { message?: string | string[] } } })
      .response
    if (res?.data?.message) {
      if (Array.isArray(res.data.message)) {
        return res.data.message.join(". ")
      }
      return res.data.message
    }
  }
  if (e instanceof Error) return e.message
  return fallback
}

// ─── Register User ────────────────────────────────────────────────────────
export async function registerAction(_state: unknown, formData: FormData) {
  const rawData = Object.fromEntries(formData)
  const parsed = registerSchema.safeParse(rawData)

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Invalid registration input",
    }
  }

  try {
    await api.post("/auth/register", {
      email: parsed.data.email.toLowerCase(),
      name: parsed.data.name?.trim() ? parsed.data.name.trim() : undefined,
      password: parsed.data.password,
    })

    redirect("/login?registered=true")
  } catch (e: unknown) {
    if (isRedirectError(e)) throw e
    return {
      error: getErrorMessage(e, "Registration failed. Please try again."),
    }
  }
}

// ─── Forgot Password ──────────────────────────────────────────────────────
export async function forgotPasswordAction(
  _state: unknown,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData)
  const parsed = forgotPasswordSchema.safeParse(rawData)

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Enter a valid email address",
    }
  }

  try {
    const res = await api.post<{ message: string }>("/auth/forgot-password", {
      email: parsed.data.email.toLowerCase(),
    })

    return {
      success: true,
      message:
        res.data?.message ??
        "If an account with that email exists, a password reset link has been sent.",
    }
  } catch (e: unknown) {
    return {
      error: getErrorMessage(
        e,
        "Unable to process reset request. Please try again."
      ),
    }
  }
}

// ─── Reset Password ───────────────────────────────────────────────────────
export async function resetPasswordAction(
  token: string,
  _state: unknown,
  formData: FormData
) {
  const password = String(formData.get("password") ?? "")
  const confirmPassword = String(formData.get("confirmPassword") ?? "")

  const parsed = resetPasswordSchema.safeParse({
    token,
    password,
    confirmPassword,
  })

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Invalid password values",
    }
  }

  try {
    await api.post("/auth/reset-password", {
      token: parsed.data.token,
      password: parsed.data.password,
    })

    redirect("/login?reset=true")
  } catch (e: unknown) {
    if (isRedirectError(e)) throw e
    return {
      error: getErrorMessage(
        e,
        "Password reset failed or the link has expired."
      ),
    }
  }
}
