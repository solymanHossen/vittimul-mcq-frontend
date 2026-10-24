import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { InteractiveMcqDemo } from "@/components/interactive-mcq-demo"
import {
  Trophy,
  Timer,
  BookOpen,
  Users,
  ShieldCheck,
  BarChart2,
  ArrowRight,
  Play,
  FileText,
  Zap,
  Landmark,
  Building2,
  Briefcase,
  Layers,
  Grid,
  Sparkles,
  Calendar,
  GraduationCap,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-[#DE9E66]/30 selection:text-[#17382B]">
      <Navbar />

      {/* ─── HERO SECTION (Replicating Image 1 Layout & Image 2 Palette) ─── */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
        {/* Soft Organic Background Curves (Peach Rose & Forest Hues) */}
        <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-[650px] w-[700px] rounded-full bg-gradient-to-bl from-[#E8CCA4]/40 via-[#F4EDE4]/30 to-transparent opacity-70 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#84966F]/15 via-transparent to-transparent blur-3xl" />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Headline, CTAs, 4 Micro Feature Pills */}
            <div className="flex flex-col text-left lg:col-span-6 xl:col-span-6">
              {/* Top Pill Badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/80 bg-card px-3.5 py-1 text-xs font-semibold text-foreground shadow-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#00A884]" />
                <span>Next-Gen Live MCQ & Competitive Exam Platform</span>
              </div>

              {/* Main Headline with Teal/Emerald Highlight */}
              <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl xl:text-[64px]">
                Simulate Real Exams.{" "}
                <span className="block">Rank Among the</span>
                <span className="text-[#00A884]">Top 1%.</span>
              </h1>

              {/* Subheading */}
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Experience authentic competitive exam simulations with
                synchronous live timers, realistic negative marking, instant
                national rankings, and chapter-wise diagnostic analytics
                tailored for BCS, Bank, and Govt Job aspirants.
              </p>

              {/* Hero Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="gap-2.5 rounded-2xl bg-[#17382B] px-7 py-6 text-base font-bold text-white shadow-xl shadow-[#17382B]/20 transition-transform hover:scale-[1.02] hover:bg-[#11291F]"
                  >
                    Join Live Exams Free
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href="#live-demo">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2.5 rounded-2xl border-border/80 bg-card px-6 py-6 text-base font-bold text-foreground shadow-sm transition-transform hover:scale-[1.02] hover:bg-muted/40"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background">
                      <Play className="ml-0.5 h-3 w-3 fill-current" />
                    </div>
                    Watch Demo
                  </Button>
                </Link>
              </div>

              {/* 4 Micro Feature Pills */}
              <div className="mt-12 grid grid-cols-2 gap-4 border-t border-border/60 pt-6 sm:grid-cols-4">
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4EDE4] text-[#17382B] shadow-sm dark:bg-[#1F3327] dark:text-[#E8CCA4]">
                    <Timer className="h-6 w-6" />
                  </div>
                  <span className="text-xs leading-tight font-bold text-foreground">
                    Real Exam
                    <br />
                    Environment
                  </span>
                </div>

                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4EDE4] text-[#17382B] shadow-sm dark:bg-[#1F3327] dark:text-[#E8CCA4]">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <span className="text-xs leading-tight font-bold text-foreground">
                    Instant
                    <br />
                    Rankings
                  </span>
                </div>

                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4EDE4] text-[#17382B] shadow-sm dark:bg-[#1F3327] dark:text-[#E8CCA4]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span className="text-xs leading-tight font-bold text-foreground">
                    Negative
                    <br />
                    Marking System
                  </span>
                </div>

                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4EDE4] text-[#17382B] shadow-sm dark:bg-[#1F3327] dark:text-[#E8CCA4]">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <span className="text-xs leading-tight font-bold text-foreground">
                    Chapter-wise
                    <br />
                    Analytics
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Composition with Student Photograph & Floating Cards */}
            <div className="relative flex justify-center lg:col-span-6 xl:col-span-6">
              {/* Organic Soft Silhouette Backdrop */}
              <div className="relative w-full max-w-[540px]">
                {/* Main Student Photograph */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border-4 border-card bg-card shadow-2xl shadow-[#17382B]/10">
                  <Image
                    src="/images/hero-student.jpg"
                    alt="Student preparing for competitive exams on laptop"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 540px"
                  />
                  {/* Subtle inner gradient overlay for card readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
                </div>

                {/* Floating Handwritten Style Badge: "Better You Everyday" */}
                <div className="absolute -top-7 right-6 hidden rotate-3 flex-col items-center sm:flex">
                  <span className="font-serif text-base font-bold text-[#17382B] italic dark:text-[#E8CCA4]">
                    Better You Everyday
                  </span>
                  <svg
                    className="h-8 w-8 -scale-x-100 text-[#17382B] dark:text-[#E8CCA4]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>

                {/* Floating Card 1: Live Exam in Progress (Top-Left) */}
                <div className="absolute -top-4 -left-4 animate-in rounded-2xl border border-border/80 bg-card/95 p-3.5 shadow-xl backdrop-blur-md duration-500 zoom-in-95 fade-in sm:-top-6 sm:-left-6">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-500">
                    <span className="h-2 w-2 animate-ping rounded-full bg-rose-500" />
                    <span>Live</span>
                  </div>
                  <div className="mt-0.5 text-xs font-semibold text-muted-foreground">
                    Live Exam in Progress
                  </div>
                  <div className="my-1 font-mono text-xl font-extrabold tracking-tight text-foreground">
                    00:45:12
                  </div>
                  <div className="h-2 w-36 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[67%] rounded-full bg-[#00A884]" />
                  </div>
                  <div className="mt-1 text-[10px] font-medium text-muted-foreground">
                    67/100 Questions
                  </div>
                </div>

                {/* Floating Card 2: Your Rank #248 (Top-Right) */}
                <div className="absolute top-2 -right-4 flex items-center gap-3 rounded-2xl border border-border/80 bg-card/95 p-3.5 shadow-xl backdrop-blur-md sm:top-4 sm:-right-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500 shadow-sm">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                      Your Rank
                    </div>
                    <div className="my-0.5 text-xl leading-none font-black text-foreground">
                      #248
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      out of 50,000+
                    </div>
                  </div>
                </div>

                {/* Floating Card 3: Score 82/100 with Teal Bars (Middle-Right) */}
                <div className="absolute top-28 -right-6 hidden rounded-2xl border border-border/80 bg-card/95 p-3.5 shadow-xl backdrop-blur-md sm:top-32 sm:-right-10 sm:block">
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">
                      Score
                    </span>
                    <span className="rounded-full bg-[#00A884]/15 px-2 py-0.5 text-[10px] font-bold text-[#00A884]">
                      Top 1%
                    </span>
                  </div>
                  <div className="text-lg font-black text-foreground">
                    82/100
                  </div>
                  {/* Dynamic Equalizer Bars */}
                  <div className="mt-1.5 flex h-7 items-end gap-1">
                    <div className="h-3 w-1.5 rounded-full bg-[#00A884]/40" />
                    <div className="h-5 w-1.5 rounded-full bg-[#00A884]" />
                    <div className="h-6 w-1.5 rounded-full bg-[#00A884]" />
                    <div className="h-4 w-1.5 rounded-full bg-[#00A884]" />
                    <div className="h-7 w-1.5 rounded-full bg-[#00A884]" />
                    <div className="h-5 w-1.5 rounded-full bg-[#00A884]" />
                    <div className="h-2 w-1.5 rounded-full bg-[#00A884]/30" />
                  </div>
                </div>

                {/* Floating Card 4: Book Stack (Bottom-Left) */}
                <div className="absolute -bottom-6 -left-3 z-10 flex flex-col gap-1 sm:-bottom-8 sm:-left-6">
                  <div className="rounded-lg bg-[#17382B] px-3 py-1 text-xs font-bold text-white shadow-md">
                    BCS +
                  </div>
                  <div className="rounded-lg bg-[#00A884] px-3 py-1 text-xs font-bold text-white shadow-md">
                    BANK +
                  </div>
                  <div className="rounded-lg bg-[#C85B28] px-3 py-1 text-xs font-bold text-white shadow-md">
                    GOVT JOB +
                  </div>
                  <div className="rounded-lg bg-[#3E522D] px-3 py-1 text-xs font-bold text-white shadow-md">
                    GENERAL KNOWLEDGE +
                  </div>
                </div>

                {/* Floating Card 5: Keep Going! (Bottom-Right) */}
                <div className="absolute -right-3 -bottom-6 flex max-w-[240px] items-center gap-3 rounded-2xl border border-border/80 bg-card/95 p-3.5 shadow-xl backdrop-blur-md sm:-right-6 sm:-bottom-8">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <Zap className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-foreground">
                      Keep Going!
                    </div>
                    <div className="text-[10px] leading-tight text-muted-foreground">
                      You&apos;re performing better than 96% of the aspirants.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS & TRUST METRICS BAR (Matching Image 1) ─── */}
      <section className="border-y border-border/60 bg-card py-8">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#84966F]/15 text-[#17382B] dark:text-[#84966F]">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-foreground sm:text-3xl">
                  50,000+
                </div>
                <div className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                  Active Aspirants
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00A884]/15 text-[#00A884]">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-foreground sm:text-3xl">
                  100,000+
                </div>
                <div className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                  Verified Questions
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DE9E66]/20 text-[#C85B28]">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-foreground sm:text-3xl">
                  &lt; 100ms
                </div>
                <div className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                  Live Rank Sync
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#17382B]/10 text-[#17382B] dark:bg-[#17382B]/40 dark:text-[#E8CCA4]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-foreground sm:text-3xl">
                  99.98%
                </div>
                <div className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                  Platform Uptime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── POPULAR CATEGORIES ("Trusted by Aspirants Across Bangladesh") ─── */}
      <section id="categories" className="py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
            Trusted by Aspirants Across Bangladesh
          </h2>

          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
            {/* BCS Category */}
            <Link
              href="/register"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all hover:border-[#17382B] hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 transition-transform group-hover:scale-110 dark:text-emerald-400">
                <Landmark className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-foreground">BCS</span>
            </Link>

            {/* Bank Jobs */}
            <Link
              href="/register"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all hover:border-[#C85B28] hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-[#C85B28] transition-transform group-hover:scale-110">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-foreground">
                Bank Jobs
              </span>
            </Link>

            {/* Govt Jobs */}
            <Link
              href="/register"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all hover:border-blue-500 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600 transition-transform group-hover:scale-110 dark:text-blue-400">
                <Briefcase className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-foreground">
                Govt Jobs
              </span>
            </Link>

            {/* Primary */}
            <Link
              href="/register"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all hover:border-pink-500 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/15 text-pink-600 transition-transform group-hover:scale-110 dark:text-pink-400">
                <Users className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-foreground">Primary</span>
            </Link>

            {/* NTRCA */}
            <Link
              href="/register"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all hover:border-purple-500 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/15 text-purple-600 transition-transform group-hover:scale-110 dark:text-purple-400">
                <Layers className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-foreground">NTRCA</span>
            </Link>

            {/* Other Exams */}
            <Link
              href="/register"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition-all hover:border-[#00A884] hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A884]/15 text-[#00A884] transition-transform group-hover:scale-110">
                <Grid className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-foreground">
                Other Exams
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE LIVE MCQ SIMULATION SECTION ─── */}
      <section
        id="live-demo"
        className="border-y border-border/60 bg-[#F4EDE4]/50 py-16 dark:bg-card/40"
      >
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#00A884]/30 bg-[#00A884]/10 px-3 py-1 text-xs font-bold text-[#00A884]">
              <Sparkles className="h-3.5 w-3.5" />
              Live Interactive Engine
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Experience the Live Examination Engine
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Try an interactive live MCQ question below. Experience the
              real-time countdown, negative scoring (-0.25), and comprehensive
              textbook explanations.
            </p>
          </div>

          <InteractiveMcqDemo />
        </div>
      </section>

      {/* ─── UPCOMING LIVE EXAMS ROUTINE ─── */}
      <section id="upcoming-exams" className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#C85B28] uppercase">
                Live Routine
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Upcoming Live Central Tests
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Join thousands of candidates nationwide under synchronous time
                constraints.
              </p>
            </div>
            <Link href="/register" className="mt-4 md:mt-0">
              <Button
                variant="outline"
                className="gap-2 rounded-xl border-border/80 text-xs font-bold"
              >
                <Calendar className="h-3.5 w-3.5 text-[#17382B]" />
                Full Monthly Routine
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Exam Card 1 */}
            <div className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-[#17382B] hover:shadow-lg">
              <div>
                <div className="mb-3 flex items-center justify-between text-xs font-semibold text-[#00A884]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#00A884]" />
                    Registration Open
                  </span>
                  <span className="font-mono text-muted-foreground">
                    200 Marks • 2 Hours
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  47th BCS Preliminary Grand Model Test
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Full 200-mark syllabus covering Bengali, English, Bangladesh
                  Affairs, International, Math, & Mental Ability.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4">
                <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Start Time:</span>
                  <span className="font-bold text-foreground">
                    Tomorrow, 08:00 PM
                  </span>
                </div>
                <Link href="/register">
                  <Button className="w-full rounded-xl bg-[#17382B] font-bold text-white hover:bg-[#11291F]">
                    Enroll in Live Test
                  </Button>
                </Link>
              </div>
            </div>

            {/* Exam Card 2 */}
            <div className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-[#C85B28] hover:shadow-lg">
              <div>
                <div className="mb-3 flex items-center justify-between text-xs font-semibold text-[#C85B28]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#C85B28]" />
                    Combined Special
                  </span>
                  <span className="font-mono text-muted-foreground">
                    100 Marks • 1 Hour
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Combined 10 Banks Officer Mock Exam
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Quantitative Aptitude, Analytical Puzzles, Commercial Law, and
                  Advanced English Grammar.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4">
                <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Start Time:</span>
                  <span className="font-bold text-foreground">
                    Friday, 10:00 AM
                  </span>
                </div>
                <Link href="/register">
                  <Button
                    variant="outline"
                    className="w-full rounded-xl border-border/80 font-bold hover:bg-[#F4EDE4]"
                  >
                    Enroll in Live Test
                  </Button>
                </Link>
              </div>
            </div>

            {/* Exam Card 3 */}
            <div className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-[#84966F] hover:shadow-lg">
              <div>
                <div className="mb-3 flex items-center justify-between text-xs font-semibold text-[#84966F]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#84966F]" />
                    Subject Sprint
                  </span>
                  <span className="font-mono text-muted-foreground">
                    50 Marks • 30 Mins
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Bangladesh & Global Affairs Special
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Recent economic indicators, constitution breakdown, budget
                  analysis, and international treaties.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4">
                <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Start Time:</span>
                  <span className="font-bold text-foreground">
                    Saturday, 06:00 PM
                  </span>
                </div>
                <Link href="/register">
                  <Button
                    variant="outline"
                    className="w-full rounded-xl border-border/80 font-bold hover:bg-[#F4EDE4]"
                  >
                    Enroll in Live Test
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DEEP FOREST GREEN FOOTER (Exact replica of Image 1) ─── */}
      <footer className="mt-auto bg-[#122B21] pt-16 pb-12 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12">
            {/* Column 1: Brand & Bio (lg:col-span-4) */}
            <div className="space-y-4 lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00A884] text-sm font-black text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight text-white">
                    Exam<span className="text-[#00A884]">Pro</span>
                  </span>
                  <span className="text-[9px] font-bold tracking-widest text-emerald-300/80 uppercase">
                    Live Examination System
                  </span>
                </div>
              </div>

              <p className="max-w-sm text-xs leading-relaxed text-emerald-100/70">
                Empowering aspirants with a smarter, fairer, and more realistic
                exam experience to build a better tomorrow.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white transition-colors hover:bg-[#00A884]"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white transition-colors hover:bg-[#00A884]"
                  aria-label="YouTube"
                >
                  ▶
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white transition-colors hover:bg-[#00A884]"
                  aria-label="Twitter"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white transition-colors hover:bg-[#00A884]"
                  aria-label="Instagram"
                >
                  📸
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white transition-colors hover:bg-[#00A884]"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (lg:col-span-2) */}
            <div className="space-y-3 lg:col-span-2">
              <h4 className="text-xs font-extrabold tracking-wider text-emerald-300 uppercase">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-emerald-100/70">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="transition-colors hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#upcoming-exams"
                    className="transition-colors hover:text-white"
                  >
                    Exams
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="transition-colors hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Popular Exams (lg:col-span-2) */}
            <div className="space-y-3 lg:col-span-2">
              <h4 className="text-xs font-extrabold tracking-wider text-emerald-300 uppercase">
                Popular Exams
              </h4>
              <ul className="space-y-2 text-xs text-emerald-100/70">
                <li>
                  <Link
                    href="/register"
                    className="transition-colors hover:text-white"
                  >
                    BCS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="transition-colors hover:text-white"
                  >
                    Bank Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="transition-colors hover:text-white"
                  >
                    Govt Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="transition-colors hover:text-white"
                  >
                    Primary
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="transition-colors hover:text-white"
                  >
                    NTRCA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="transition-colors hover:text-white"
                  >
                    Other Exams
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Resources (lg:col-span-2) */}
            <div className="space-y-3 lg:col-span-2">
              <h4 className="text-xs font-extrabold tracking-wider text-emerald-300 uppercase">
                Resources
              </h4>
              <ul className="space-y-2 text-xs text-emerald-100/70">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Exam Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Newsletter (lg:col-span-2) */}
            <div className="space-y-3 lg:col-span-2">
              <h4 className="text-xs font-extrabold tracking-wider text-emerald-300 uppercase">
                Newsletter
              </h4>
              <p className="text-xs leading-relaxed text-emerald-100/70">
                Get the latest updates, exams and tips straight to your inbox.
              </p>

              <div className="relative mt-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 pr-10 text-xs text-white placeholder:text-emerald-200/50 focus:border-[#00A884] focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-1.5 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg bg-[#00A884] text-white transition-colors hover:bg-[#008F7A]"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-emerald-100/60 sm:flex-row">
            <div>
              © {new Date().getFullYear()} Vittimul MCQ ExamPro. All rights
              reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="transition-colors hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Terms
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
