"use client"

import { useActionState } from "react"
import Link from "next/link"
import { forgotPasswordAction } from "@/actions/auth.actions"
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
import { KeyRound, Mail, ArrowLeft, Send, CheckCircle2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const [state, action, isPending] = useActionState(
    forgotPasswordAction,
    undefined
  )

  return (
    <Card className="w-full max-w-md border border-border/60 bg-card/80 shadow-2xl backdrop-blur-xl">
      <CardHeader className="space-y-2 pb-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <KeyRound className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl font-black tracking-tight">
          Reset Your Password
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Enter your registered email address and we&apos;ll send you a password
          recovery link.
        </CardDescription>
      </CardHeader>

      <form action={action}>
        <CardContent className="space-y-4">
          {state?.error && (
            <Alert variant="destructive" className="text-xs">
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          {state?.success && (
            <Alert className="border-emerald-500/50 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription className="text-xs font-semibold">
                {state.message}
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs font-semibold">
              Registered Email
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
        </CardContent>

        <CardFooter className="flex-col gap-4 pt-2">
          <Button
            type="submit"
            className="w-full gap-2 py-5 font-bold shadow-md shadow-primary/20"
            disabled={isPending}
          >
            <Send className="h-4 w-4" />
            {isPending ? "Sending Link..." : "Send Password Reset Link"}
          </Button>

          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Sign In
          </Link>
        </CardFooter>
      </form>
    </Card>
  )
}
