"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useState } from "react"

export function SignOutButton({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    setLoading(true)
    await signOut({ callbackUrl: "/login" })
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleSignOut}
      disabled={loading}
      className={`gap-1.5 text-xs font-semibold transition-colors hover:border-destructive/50 hover:bg-destructive/10 hover:text-destructive ${className ?? ""}`}
    >
      <LogOut className="h-3.5 w-3.5" />
      {loading ? "Signing out..." : "Sign Out"}
    </Button>
  )
}
