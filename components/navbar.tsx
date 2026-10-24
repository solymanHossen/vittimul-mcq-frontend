"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Sun,
  Moon,
  Sparkles,
  LayoutDashboard,
  Search,
} from "lucide-react"
import { useSyncExternalStore } from "react"
import { SignOutButton } from "@/components/sign-out-button"

const emptySubscribe = () => () => {}

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const { data: session, status } = useSession()
  const pathname = usePathname()

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const isAuthenticated = status === "authenticated" && session?.user

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg leading-none font-extrabold tracking-tight text-foreground">
              Vittimul<span className="ml-0.5 text-primary">MCQ</span>
            </span>
            <span className="mt-0.5 text-[9px] font-bold tracking-widest text-muted-foreground uppercase">
              Live Examination System
            </span>
          </div>
        </Link>

        {/* Center Nav Links with active green underline as in Image 1 */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
          <Link
            href="/"
            className={`relative py-1 transition-colors hover:text-foreground ${
              pathname === "/" ? "font-bold text-foreground" : ""
            }`}
          >
            Home
            {pathname === "/" && (
              <span className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-[#00A884]" />
            )}
          </Link>
          <Link
            href="/#live-demo"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <span className="h-2 w-2 animate-ping rounded-full bg-[#00A884]" />
            Live Exams
          </Link>
          <Link
            href="/#categories"
            className="transition-colors hover:text-foreground"
          >
            Question Bank
          </Link>
          <Link
            href="/#upcoming-exams"
            className="transition-colors hover:text-foreground"
          >
            Syllabus & Routine
          </Link>
          <Link
            href="/#features"
            className="transition-colors hover:text-foreground"
          >
            Analytics
          </Link>
          {isAuthenticated && (
            <Link
              href="/dashboard"
              className="flex items-center gap-1 font-bold text-primary transition-colors hover:underline"
            >
              <LayoutDashboard className="h-3.5 w-3.5" />
              Dashboard
            </Link>
          )}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-3">
          {/* Quick Search Icon */}
          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center rounded-xl border border-border/80 text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground sm:flex"
            title="Search exams"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="h-9 w-9 rounded-xl border border-border/80 text-muted-foreground hover:text-foreground"
              title="Toggle theme (or press 'D')"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </Button>
          )}

          {mounted && isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <Button
                  size="sm"
                  className="gap-1.5 rounded-xl bg-primary text-xs font-bold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90"
                >
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  Dashboard
                </Button>
              </Link>
              <SignOutButton />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden text-xs font-bold sm:inline-flex"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="sm"
                  className="gap-1.5 rounded-xl bg-primary text-xs font-bold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Join Live Exams
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
