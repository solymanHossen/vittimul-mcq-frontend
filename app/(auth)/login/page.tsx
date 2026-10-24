"use client"

import { Suspense, useState, useTransition } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  GraduationCap,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

function LoginForm() {
  const params = useSearchParams()
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isPending, startTransition] = useTransition()

  const isRegistered = params.get("registered")
  const isReset = params.get("reset")
  const callbackUrl = params.get("callbackUrl") || "/dashboard"

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get("email") ?? "").trim()
    const password = String(formData.get("password") ?? "")

    if (!email || !password) {
      setError("Please provide both email and password.")
      return
    }

    startTransition(async () => {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl,
      })

      if (!result || result.error) {
        setError("Invalid email or password. Please verify your credentials.")
        return
      }

      window.location.href = result.url || callbackUrl
    })
  }

  return (
    <Card className="w-full max-w-md border border-border/60 bg-card/80 shadow-2xl backdrop-blur-xl">
      <CardHeader className="space-y-2 pb-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
          <GraduationCap className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl font-black tracking-tight">
          Welcome to Vittimul
          <span className="ml-1 font-black text-primary">MCQ</span>
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Sign in to access live exams, performance radar, and model test
          rankings.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {isRegistered && (
            <Alert className="border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription className="text-xs font-semibold">
                Account created successfully! You can now log in.
              </AlertDescription>
            </Alert>
          )}

          {isReset && (
            <Alert className="border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription className="text-xs font-semibold">
                Password reset successfully! Please sign in with your new
                password.
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive" className="text-xs">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs font-semibold">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="aspirant@example.com"
                autoComplete="email"
                className="pl-9 text-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-xs font-semibold">
                Password
              </Label>
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                className="pr-9 pl-9 text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-4 pt-2">
          <Button
            type="submit"
            className="w-full gap-2 py-5 font-bold shadow-md shadow-primary/20"
            disabled={isPending}
          >
            {isPending ? "Authenticating..." : "Sign In to Dashboard"}
            {!isPending && <ArrowRight className="h-4 w-4" />}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Don&apos;t have an account yet?{" "}
            <Link
              href="/register"
              className="font-semibold text-primary underline underline-offset-4"
            >
              Register now
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <Card className="w-full max-w-md animate-pulse p-6">
          <div className="mx-auto mb-4 h-8 w-40 rounded bg-muted" />
          <div className="mx-auto mb-8 h-4 w-60 rounded bg-muted" />
          <div className="space-y-4">
            <div className="h-10 w-full rounded bg-muted" />
            <div className="h-10 w-full rounded bg-muted" />
            <div className="h-10 w-full rounded bg-muted" />
          </div>
        </Card>
      }
    >
      <LoginForm />
    </Suspense>
  )
}
