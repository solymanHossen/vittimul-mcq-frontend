"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { GraduationCap, Sun, Moon, Sparkles } from "lucide-react"
import { useSyncExternalStore } from "react"

const emptySubscribe = () => () => {}

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-primary/70 text-primary-foreground shadow-md shadow-primary/25">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg leading-none font-bold tracking-tight text-foreground">
              Vittimul<span className="ml-1 font-black text-primary">MCQ</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
              Live Examination System
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link
            href="#features"
            className="transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#live-demo"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-500" />
            Live Demo
          </Link>
          <Link
            href="#upcoming-exams"
            className="transition-colors hover:text-foreground"
          >
            Exams Schedule
          </Link>
          <Link
            href="#leaderboard"
            className="transition-colors hover:text-foreground"
          >
            Leaderboard
          </Link>
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="flex items-center gap-3">
          {mounted && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="h-9 w-9 rounded-xl border border-border/40 text-muted-foreground hover:text-foreground"
              title="Toggle theme (or press 'D')"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </Button>
          )}

          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className="hidden text-xs font-semibold sm:inline-flex"
            >
              Sign In
            </Button>
          </Link>

          <Link href="/register">
            <Button
              size="sm"
              className="gap-1.5 rounded-xl text-xs font-semibold shadow-md shadow-primary/20"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
