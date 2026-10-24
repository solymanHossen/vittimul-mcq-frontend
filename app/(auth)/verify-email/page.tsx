"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle2, ArrowRight, GraduationCap } from "lucide-react"

function VerifyEmailContent() {
  const params = useSearchParams()
  const email = params.get("email") ?? ""

  return (
    <Card className="w-full max-w-md border border-border/60 bg-card/80 text-center shadow-2xl backdrop-blur-xl">
      <CardHeader className="space-y-2 pb-6">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <CardTitle className="text-2xl font-black tracking-tight">
          Account Verified & Ready!
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          {email ? (
            <>
              Your account for{" "}
              <span className="font-semibold text-foreground">{email}</span> has
              been created.
            </>
          ) : (
            "Your aspirant account is active and ready for competitive exam practice."
          )}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="rounded-xl border border-border/60 bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground">
          In Vittimul MCQ, accounts are activated immediately upon registration.
          You can now log in with your credentials and access live central
          exams.
        </div>
      </CardContent>

      <CardFooter className="flex-col gap-3 pt-2">
        <Link
          href={`/login?registered=true${email ? `&email=${encodeURIComponent(email)}` : ""}`}
          className="w-full"
        >
          <Button className="w-full gap-2 py-5 font-bold shadow-md shadow-primary/20">
            <GraduationCap className="h-4 w-4" />
            Proceed to Sign In
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <Card className="w-full max-w-md animate-pulse p-6">
          <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-muted" />
          <div className="mx-auto mb-2 h-6 w-48 rounded bg-muted" />
          <div className="mx-auto h-4 w-64 rounded bg-muted" />
        </Card>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  )
}
