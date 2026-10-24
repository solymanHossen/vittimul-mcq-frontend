"use client"

import { useActionState, useState } from "react"
import Link from "next/link"
import { registerAction } from "@/actions/auth.actions"
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
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

export default function RegisterPage() {
  const [state, action, isPending] = useActionState(registerAction, undefined)
  const [showPassword, setShowPassword] = useState(false)
  const [passwordValue, setPasswordValue] = useState("")

  const hasMinLength = passwordValue.length >= 8
  const hasUpper = /[A-Z]/.test(passwordValue)
  const hasLower = /[a-z]/.test(passwordValue)
  const hasNumber = /\d/.test(passwordValue)

  return (
    <Card className="w-full max-w-md border border-border/60 bg-card/80 shadow-2xl backdrop-blur-xl">
      <CardHeader className="space-y-2 pb-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
          <GraduationCap className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl font-black tracking-tight">
          Create Your Aspirant Account
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Join thousands of candidates preparing for BCS, Bank, and competitive
          exams.
        </CardDescription>
      </CardHeader>

      <form action={action}>
        <CardContent className="space-y-4">
          {state?.error && (
            <Alert variant="destructive" className="text-xs">
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs font-semibold">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="name"
                name="name"
                placeholder="e.g. Solyman Hossen"
                autoComplete="name"
                className="pl-9 text-sm"
                required
              />
            </div>
          </div>

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
            <Label htmlFor="password" className="text-xs font-semibold">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="new-password"
                className="pr-9 pl-9 text-sm"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
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

            {/* Live Password Rules Indicator */}
            <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px] text-muted-foreground">
              <span
                className={`flex items-center gap-1 ${hasMinLength ? "font-medium text-emerald-500" : ""}`}
              >
                <CheckCircle2
                  className={`h-3 w-3 ${hasMinLength ? "text-emerald-500" : "opacity-40"}`}
                />
                Min 8 characters
              </span>
              <span
                className={`flex items-center gap-1 ${hasUpper ? "font-medium text-emerald-500" : ""}`}
              >
                <CheckCircle2
                  className={`h-3 w-3 ${hasUpper ? "text-emerald-500" : "opacity-40"}`}
                />
                1 uppercase letter
              </span>
              <span
                className={`flex items-center gap-1 ${hasLower ? "font-medium text-emerald-500" : ""}`}
              >
                <CheckCircle2
                  className={`h-3 w-3 ${hasLower ? "text-emerald-500" : "opacity-40"}`}
                />
                1 lowercase letter
              </span>
              <span
                className={`flex items-center gap-1 ${hasNumber ? "font-medium text-emerald-500" : ""}`}
              >
                <CheckCircle2
                  className={`h-3 w-3 ${hasNumber ? "text-emerald-500" : "opacity-40"}`}
                />
                1 number
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-4 pt-2">
          <Button
            type="submit"
            className="w-full gap-2 py-5 font-bold shadow-md shadow-primary/20"
            disabled={isPending}
          >
            <Sparkles className="h-4 w-4" />
            {isPending ? "Creating Account..." : "Create Aspirant Account"}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Already registered?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary underline underline-offset-4"
            >
              Sign in to account
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}
