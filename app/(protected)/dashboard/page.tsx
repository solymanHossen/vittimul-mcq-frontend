import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { SignOutButton } from "@/components/sign-out-button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Trophy,
  Timer,
  BookOpen,
  BarChart3,
  Flame,
  ArrowRight,
  Shield,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  const { user } = session
  const isAdmin = user.role === "ADMIN" || user.role === "SUPER_ADMIN"

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-black text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight">
                Vittimul
                <span className="ml-1 font-black text-primary">MCQ</span>
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground uppercase">
                Candidate Dashboard
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden flex-col text-right sm:flex">
              <span className="text-xs font-semibold text-foreground">
                {user.name || user.email}
              </span>
              <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
                {user.role}
              </span>
            </div>
            <SignOutButton />
          </div>
        </div>
      </header>

      {/* Main Dashboard Workspace */}
      <main className="container mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome & Profile Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-card to-card p-6 shadow-xl backdrop-blur-xl sm:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                  <Sparkles className="h-3 w-3" />
                  Live Exam Portal
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-500">
                  <CheckCircle2 className="h-3 w-3" />
                  Account Active
                </span>
                {isAdmin && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-semibold text-indigo-500">
                    <Shield className="h-3 w-3" />
                    {user.role} Privileges
                  </span>
                )}
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Welcome back, {user.name || "Candidate"}!
              </h1>
              <p className="max-w-xl text-xs text-muted-foreground sm:text-sm">
                Ready for today&apos;s scheduled live model test? Check your
                upcoming examination routine, review your error analytics, or
                practice chapter-wise question sets.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/#live-demo">
                <Button className="gap-2 font-semibold shadow-md shadow-primary/20">
                  <Flame className="h-4 w-4 text-amber-400" />
                  Enter Live Practice
                </Button>
              </Link>
              {isAdmin && (
                <Link href="/admin">
                  <Button variant="outline" className="gap-2 font-semibold">
                    <Shield className="h-4 w-4" />
                    Admin Panel
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Quick Candidate Performance Indicators */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="rounded-2xl border-border/60 bg-card/60 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs font-semibold uppercase">
                National Percentile
              </CardDescription>
              <CardTitle className="text-2xl font-black text-primary">
                98.4%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Top 2% among 42,500 candidates
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/60 bg-card/60 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs font-semibold uppercase">
                Overall Accuracy
              </CardDescription>
              <CardTitle className="text-2xl font-black text-emerald-500">
                86.2%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              +4.8% improvement this month
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/60 bg-card/60 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs font-semibold uppercase">
                Response Velocity
              </CardDescription>
              <CardTitle className="text-2xl font-black text-foreground">
                38s
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Average response time per MCQ
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border/60 bg-card/60 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs font-semibold uppercase">
                Exams Completed
              </CardDescription>
              <CardTitle className="text-2xl font-black text-amber-500">
                142
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              Across BCS, Bank & Ministry tests
            </CardContent>
          </Card>
        </div>

        {/* Interactive Feature Access Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Live Exam Room */}
          <Card className="rounded-2xl border-border/60 bg-card transition-all hover:border-primary/50 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Timer className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-bold">
                Synchronous Live Exams
              </CardTitle>
              <CardDescription className="text-xs">
                Next scheduled test starts tomorrow at 08:00 PM. Simultaneous
                national participation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/#upcoming-exams">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 text-xs font-semibold"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  View Exam Routine
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card 2: Question Archive */}
          <Card className="rounded-2xl border-border/60 bg-card transition-all hover:border-primary/50 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <BookOpen className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-bold">
                Question Archive & Bank
              </CardTitle>
              <CardDescription className="text-xs">
                Explore 100,000+ past year questions categorized by subject,
                chapter, and difficulty level.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/#live-demo">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 text-xs font-semibold"
                >
                  Practice Questions
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card 3: Performance Radar */}
          <Card className="rounded-2xl border-border/60 bg-card transition-all hover:border-primary/50 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <BarChart3 className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-bold">
                Diagnostic Error Radar
              </CardTitle>
              <CardDescription className="text-xs">
                Review your weak areas, negative marking traps, and recommended
                revision topics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2 text-xs font-semibold"
              >
                <Trophy className="h-3.5 w-3.5" />
                View Merit Rankings
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
