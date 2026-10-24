import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { InteractiveMcqDemo } from "@/components/interactive-mcq-demo"
import {
  Trophy,
  Timer,
  BookOpen,
  Users,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Flame,
  Award,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        {/* Ambient Gradient Background Glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-[350px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md transition-all hover:bg-primary/10">
              <span className="flex h-2 w-2 animate-ping rounded-full bg-primary" />
              <span>Next-Gen Live MCQ & Competitive Exam Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Simulate Real Exams.{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-emerald-500 bg-clip-text text-transparent">
                Rank Among the Top 1%.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Experience authentic competitive exam simulations with synchronous
              live timers, realistic negative marking, instant national
              rankings, and chapter-wise diagnostic analytics tailored for BCS,
              Bank, and Govt Job aspirants.
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/register">
                <Button
                  size="lg"
                  className="gap-2 rounded-2xl px-7 py-6 text-base font-bold shadow-xl shadow-primary/25 transition-transform hover:scale-[1.02]"
                >
                  Join Live Exams Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#live-demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 rounded-2xl border-border/80 px-7 py-6 text-base font-medium backdrop-blur-md hover:bg-muted/40"
                >
                  <Flame className="h-4 w-4 text-amber-500" />
                  Try Interactive Demo
                </Button>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-4 border-y border-border/40 py-6 text-left sm:grid-cols-4 sm:gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-foreground sm:text-3xl">
                  50,000+
                </span>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Active Aspirants
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-foreground sm:text-3xl">
                  100,000+
                </span>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Verified Questions
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-foreground sm:text-3xl">
                  &lt; 100ms
                </span>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Live Rank Sync
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-foreground sm:text-3xl">
                  99.98%
                </span>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Platform Uptime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Live Demo Section */}
      <section
        id="live-demo"
        className="border-y border-border/40 bg-muted/20 py-16"
      >
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              Interactive Experience
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Experience the Live Exam Engine
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Try an interactive live MCQ question below. Experience our
              countdown timers, instant evaluation, negative scoring, and
              textbook explanations in real time.
            </p>
          </div>

          <InteractiveMcqDemo />
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Engineered for Excellence
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything You Need to Ace Competitive Exams
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
              From real-time synchronized live tests to comprehensive post-exam
              autopsy and weak-area discovery, Vittimul MCQ leaves zero room for
              chance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <Card className="rounded-2xl border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Timer className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Synchronous Live Exams
                </CardTitle>
                <CardDescription className="text-xs">
                  Nationwide simultaneous tests scheduled at fixed hours.
                  Compete with thousands under identical strict time and
                  negative marking constraints.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  <span>Real-time synchronized countdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  <span>Standard 0.25 / 0.50 negative marking</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="rounded-2xl border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Trophy className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Live National Leaderboard
                </CardTitle>
                <CardDescription className="text-xs">
                  Discover your national rank, percentile standing, and merit
                  list instantly after exam submission with detailed participant
                  metrics.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Accurate percentile calculations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Merit list & subject-wise breakdown</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="rounded-2xl border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Diagnostic Performance Radar
                </CardTitle>
                <CardDescription className="text-xs">
                  Pinpoint your exact weak chapters and error patterns with our
                  smart diagnostic engine that tracks your speed, accuracy, and
                  confidence.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500" />
                  <span>Time-per-question velocity analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500" />
                  <span>Personalized revision recommendations</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="rounded-2xl border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Exhaustive Question Archive
                </CardTitle>
                <CardDescription className="text-xs">
                  Over 100,000+ curated questions spanning BCS Preliminary, Bank
                  Officer, BJS, and Primary Teacher recruitment with verified
                  references.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Subject, topic, and chapter tags</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                  <span>Comprehensive textbook explanations</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="rounded-2xl border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Anti-Cheat Fair Play System
                </CardTitle>
                <CardDescription className="text-xs">
                  Maintain authentic competitive integrity through tab-switch
                  detection, option randomization, and strict unpauseable timer
                  enforcement.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-rose-500" />
                  <span>Automated tab & window switch alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-rose-500" />
                  <span>Dynamic option shuffling per candidate</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="rounded-2xl border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-bold">
                  Collaborative Study Circles
                </CardTitle>
                <CardDescription className="text-xs">
                  Create private mock tests with friends, compare rankings
                  within your university circle, and challenge peers to
                  speed-round quizzes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-500" />
                  <span>Custom group exams & question sets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-500" />
                  <span>Peer-to-peer rank comparisons</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Exams Schedule Showcase */}
      <section
        id="upcoming-exams"
        className="border-t border-border/40 bg-muted/20 py-20"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Live Schedule
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Upcoming Live Model Tests
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Register early for scheduled live exams to participate in the
                national merit list.
              </p>
            </div>
            <Link href="/register" className="mt-4 md:mt-0">
              <Button variant="outline" className="gap-2 text-xs font-semibold">
                <Calendar className="h-3.5 w-3.5" />
                View Full Monthly Routine
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Exam Card 1 */}
            <Card className="rounded-2xl border-border/60 bg-card transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center justify-between text-xs font-medium text-emerald-500">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    Registration Open
                  </span>
                  <span className="font-mono text-muted-foreground">
                    200 Marks • 2 Hours
                  </span>
                </div>
                <CardTitle className="text-lg font-bold">
                  47th BCS Preliminary Grand Model Test
                </CardTitle>
                <CardDescription className="text-xs">
                  Full 200-mark syllabus covering Bengali, English, Bangladesh
                  Affairs, International, Math, & Mental Ability.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="flex items-center justify-between rounded-lg bg-muted/50 p-2.5">
                  <span className="text-muted-foreground">Exam Date:</span>
                  <span className="font-semibold text-foreground">
                    Tomorrow, 08:00 PM
                  </span>
                </div>
                <Link href="/register" className="block w-full">
                  <Button className="w-full text-xs font-semibold">
                    Enroll in Live Test
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Exam Card 2 */}
            <Card className="rounded-2xl border-border/60 bg-card transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center justify-between text-xs font-medium text-primary">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Special Test
                  </span>
                  <span className="font-mono text-muted-foreground">
                    100 Marks • 1 Hour
                  </span>
                </div>
                <CardTitle className="text-lg font-bold">
                  Combined 10 Banks Officer Mock Exam
                </CardTitle>
                <CardDescription className="text-xs">
                  Intensive focus on Quantitative Aptitude, Analytical Puzzles,
                  Commercial Law, and English Grammar.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="flex items-center justify-between rounded-lg bg-muted/50 p-2.5">
                  <span className="text-muted-foreground">Exam Date:</span>
                  <span className="font-semibold text-foreground">
                    Friday, 10:00 AM
                  </span>
                </div>
                <Link href="/register" className="block w-full">
                  <Button
                    className="w-full text-xs font-semibold"
                    variant="outline"
                  >
                    Enroll in Live Test
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Exam Card 3 */}
            <Card className="rounded-2xl border-border/60 bg-card transition-all hover:border-primary/50 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center justify-between text-xs font-medium text-amber-500">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    Subject Sprint
                  </span>
                  <span className="font-mono text-muted-foreground">
                    50 Marks • 30 Mins
                  </span>
                </div>
                <CardTitle className="text-lg font-bold">
                  Bangladesh & Global Affairs Special
                </CardTitle>
                <CardDescription className="text-xs">
                  Recent political updates, economic indicators, budget
                  breakdown, and international treaties.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="flex items-center justify-between rounded-lg bg-muted/50 p-2.5">
                  <span className="text-muted-foreground">Exam Date:</span>
                  <span className="font-semibold text-foreground">
                    Saturday, 06:00 PM
                  </span>
                </div>
                <Link href="/register" className="block w-full">
                  <Button
                    className="w-full text-xs font-semibold"
                    variant="outline"
                  >
                    Enroll in Live Test
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-emerald-500/10 to-primary/10" />
        <div className="container mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/20 bg-card/80 p-8 shadow-2xl backdrop-blur-xl sm:p-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Award className="h-4 w-4" />
              Join 50,000+ Candidates Today
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Secure Your Cadre or Dream Career?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Sign up today to participate in daily free model tests, challenge
              top aspirants, and receive personalized performance diagnostics.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/register">
                <Button
                  size="lg"
                  className="rounded-2xl px-8 py-6 text-base font-bold shadow-xl shadow-primary/25"
                >
                  Create Free Account
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl px-8 py-6 text-base font-medium"
                >
                  Sign In to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background py-12 text-sm text-muted-foreground">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-black text-primary-foreground">
                V
              </div>
              <span className="font-bold text-foreground">
                Vittimul MCQ Platform
              </span>
              <span className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Solyman Hossen. All rights
                reserved.
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs font-medium">
              <Link
                href="/login"
                className="transition-colors hover:text-foreground"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="transition-colors hover:text-foreground"
              >
                Register
              </Link>
              <Link
                href="#features"
                className="transition-colors hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#upcoming-exams"
                className="transition-colors hover:text-foreground"
              >
                Routine
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
