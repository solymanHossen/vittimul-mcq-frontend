"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { useSession } from "next-auth/react"
import { useSyncExternalStore } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SignOutButton } from "@/components/sign-out-button"
import { cn } from "@/lib/utils"
import {
  GraduationCap,
  Sun,
  Moon,
  Sparkles,
  LayoutDashboard,
  Search,
  Menu,
} from "lucide-react"

interface NavLink {
  label: string
  href: string
  sectionId: string | null
  live?: boolean
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", sectionId: null },
  { label: "Live Exams", href: "/#live-demo", sectionId: "live-demo", live: true },
  { label: "Question Bank", href: "/#categories", sectionId: "categories" },
  {
    label: "Syllabus & Routine",
    href: "/#upcoming-exams",
    sectionId: "upcoming-exams",
  },
  { label: "Analytics", href: "/#features", sectionId: "features" },
]

const SECTION_IDS = NAV_LINKS.map((link) => link.sectionId).filter(
  (id): id is string => id !== null
)
const SECTION_SELECTOR = SECTION_IDS.map((id) => `#${id}`).join(", ")

// Header height plus a small margin — a section counts as "active" once
// it has scrolled up past this line, not merely while centered on screen.
// This stays correct even for short sections (e.g. the stats bar).
const ACTIVE_LINE_OFFSET = 96

const emptySubscribe = () => () => {}

function useScrollSpy(enabled: boolean) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!enabled) return

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(SECTION_SELECTOR)
    )
    if (elements.length === 0) return

    function update() {
      let current: string | null = null
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= ACTIVE_LINE_OFFSET) {
          current = el.id
        }
      }
      setActiveId(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [enabled])

  return activeId
}

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const { data: session, status } = useSession()
  const pathname = usePathname()
  const router = useRouter()

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const isAuthenticated = status === "authenticated" && Boolean(session?.user)
  const isHome = pathname === "/"
  const activeSection = useScrollSpy(isHome)

  const isLinkActive = React.useCallback(
    (link: NavLink) =>
      link.sectionId ? activeSection === link.sectionId : isHome && !activeSection,
    [activeSection, isHome]
  )

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const searchRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!searchOpen) return

    function onPointerDown(event: PointerEvent) {
      if (!searchRef.current?.contains(event.target as Node)) {
        setSearchOpen(false)
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSearchOpen(false)
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [searchOpen])

  const results = NAV_LINKS.filter((link) =>
    link.label.toLowerCase().includes(query.trim().toLowerCase())
  )

  function goTo(href: string) {
    setSearchOpen(false)
    setQuery("")
    if (href === "/" && isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    router.push(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform duration-150 group-hover:scale-105">
            <GraduationCap className="h-4.5 w-4.5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[1.05rem] font-bold tracking-tight text-foreground">
              Vittimul<span className="text-primary">MCQ</span>
            </span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Live Examination System
            </span>
          </span>
        </Link>

        {/* Primary nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group/link relative flex items-center gap-1.5 rounded-sm py-2 text-[13.5px] font-semibold tracking-tight transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.live && (
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-accent animate-pulse" />
                )}
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-x-0 -bottom-px h-0.5 origin-left rounded-full bg-primary transition-transform duration-200",
                    active
                      ? "scale-x-100"
                      : "scale-x-0 bg-primary/40 group-hover/link:scale-x-100"
                  )}
                />
              </Link>
            )
          })}
        </nav>

        {/* Utility */}
        <div className="flex items-center justify-end gap-1 sm:gap-1.5">
          {/* Quick search */}
          <div ref={searchRef} className="relative">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground hover:text-foreground"
              title="Search"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((open) => !open)}
            >
              <Search className="h-4 w-4" />
            </Button>

            {searchOpen && (
              <div className="animate-in fade-in-0 zoom-in-95 absolute top-11 right-0 w-72 rounded-xl border border-border bg-popover p-2 shadow-lg duration-150">
                <Input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Jump to a section..."
                  className="h-9"
                />
                <ul className="mt-1.5 max-h-56 overflow-auto">
                  {results.length === 0 ? (
                    <li className="px-2 py-2 text-xs text-muted-foreground">
                      No matches
                    </li>
                  ) : (
                    results.map((item) => (
                      <li key={item.href}>
                        <button
                          type="button"
                          onClick={() => goTo(item.href)}
                          className="flex w-full items-center rounded-lg px-2 py-2 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Theme toggle */}
          {mounted && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="h-9 w-9 text-muted-foreground hover:text-foreground"
              title="Toggle theme (or press 'D')"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}

          {/* Account actions — mirrored inside the mobile sheet below xl, so
              only one copy is ever visible at a time */}
          {mounted && (
            <div className="ml-1 hidden items-center gap-2 border-l border-border pl-2 xl:flex xl:ml-2 xl:pl-3">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard">
                    <Button size="sm" className="gap-1.5 text-xs font-bold">
                      <LayoutDashboard className="h-3.5 w-3.5" />
                      Dashboard
                    </Button>
                  </Link>
                  <SignOutButton
                    variant="ghost"
                    className="border-0 text-muted-foreground hover:bg-destructive/10"
                  />
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="text-xs font-bold">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm" className="gap-1.5 text-xs font-bold">
                      <Sparkles className="h-3.5 w-3.5" />
                      Join Live Exams
                    </Button>
                  </Link>
                </>
              )}
            </div>
          )}

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-9 w-9 xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[85%] flex-col gap-0 p-0 sm:max-w-xs">
              <SheetHeader className="border-b border-border">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <span className="text-base font-bold tracking-tight text-foreground">
                    Vittimul<span className="text-primary">MCQ</span>
                  </span>
                </Link>
              </SheetHeader>

              <nav
                aria-label="Mobile"
                className="flex flex-1 flex-col gap-1 overflow-auto p-3"
              >
                {NAV_LINKS.map((link) => {
                  const active = isLinkActive(link)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold transition-colors",
                        active
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {link.live && (
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-accent animate-pulse" />
                      )}
                      {link.label}
                    </Link>
                  )
                })}
              </nav>

              <div className="flex items-center justify-between border-t border-border px-4 py-3">
                <span className="text-xs font-semibold text-muted-foreground">
                  Theme
                </span>
                {mounted && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setTheme(resolvedTheme === "dark" ? "light" : "dark")
                    }
                    className="h-9 w-9"
                    aria-label="Toggle theme"
                  >
                    {resolvedTheme === "dark" ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </Button>
                )}
              </div>

              <div className="flex flex-col gap-2 border-t border-border p-4">
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full gap-1.5 text-sm font-bold">
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Button>
                    </Link>
                    <SignOutButton variant="outline" className="w-full justify-center" />
                  </>
                ) : (
                  <>
                    <Link href="/register" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full gap-1.5 text-sm font-bold">
                        <Sparkles className="h-4 w-4" />
                        Join Live Exams
                      </Button>
                    </Link>
                    <Link href="/login" onClick={() => setMobileOpen(false)}>
                      <Button variant="outline" className="w-full text-sm font-bold">
                        Sign In
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
