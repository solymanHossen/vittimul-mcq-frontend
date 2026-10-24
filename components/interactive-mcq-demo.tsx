"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  CheckCircle2,
  XCircle,
  Timer,
  Award,
  RotateCcw,
  Sparkles,
} from "lucide-react"

interface Question {
  id: number
  question: string
  category: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    category: "BCS Preliminary • General Science",
    question:
      "Which component in the blood is primarily responsible for transporting oxygen throughout the human body?",
    options: [
      "White Blood Cells (Leukocytes)",
      "Hemoglobin in Red Blood Cells",
      "Blood Platelets (Thrombocytes)",
      "Blood Plasma Albumin",
    ],
    correctAnswer: 1,
    explanation:
      "Hemoglobin is an iron-rich protein in red blood cells (erythrocytes) that binds reversibly to oxygen in the lungs and delivers it to tissues across the body.",
  },
  {
    id: 2,
    category: "Bank Recruitment • Quantitative Aptitude",
    question:
      "A train 180 meters long is running at a speed of 54 km/h. How many seconds will it take to pass a stationary pole?",
    options: ["10 seconds", "12 seconds", "15 seconds", "18 seconds"],
    correctAnswer: 1,
    explanation:
      "Speed = 54 km/h = 54 × (5/18) m/s = 15 m/s. Time to cross pole = Distance / Speed = 180 / 15 = 12 seconds.",
  },
  {
    id: 3,
    category: "General Knowledge • International Affairs",
    question:
      "Which international treaty established the International Criminal Court (ICC)?",
    options: [
      "The Geneva Conventions",
      "The Rome Statute",
      "The Kyoto Protocol",
      "The Treaty of Versailles",
    ],
    correctAnswer: 1,
    explanation:
      "The Rome Statute of the International Criminal Court is the multilateral treaty that founded the ICC in 1998, entering into force in July 2002.",
  },
]

export function InteractiveMcqDemo() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(30)
  const [score, setScore] = useState(0)

  const q = sampleQuestions[currentIdx]

  useEffect(() => {
    if (isSubmitted) return

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsSubmitted(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isSubmitted])

  const handleSelect = (idx: number) => {
    if (isSubmitted) return
    setSelectedOption(idx)
  }

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return
    setIsSubmitted(true)
    if (selectedOption === q.correctAnswer) {
      setScore((s) => s + 1)
    } else {
      setScore((s) => Math.max(0, s - 0.25))
    }
  }

  const handleNext = () => {
    const nextIdx = (currentIdx + 1) % sampleQuestions.length
    setCurrentIdx(nextIdx)
    setSelectedOption(null)
    setIsSubmitted(false)
    setSecondsLeft(30)
  }

  const handleReset = () => {
    setCurrentIdx(0)
    setSelectedOption(null)
    setIsSubmitted(false)
    setSecondsLeft(30)
    setScore(0)
  }

  return (
    <Card className="w-full overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl backdrop-blur-xl transition-all duration-300">
      {/* Top Simulation Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-border/60 bg-[#F4EDE4]/60 px-6 py-3.5 text-xs font-semibold dark:bg-[#182E22]/60">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-[#00A884]" />
          <span className="font-extrabold tracking-wider text-[#00A884] uppercase">
            Live Simulation Engine
          </span>
          <span className="font-medium text-muted-foreground">
            • Question {currentIdx + 1} of {sampleQuestions.length}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <Timer
              className={`h-4 w-4 ${secondsLeft < 10 ? "animate-bounce text-[#C85B28]" : "text-[#17382B] dark:text-[#E8CCA4]"}`}
            />
            <span
              className={
                secondsLeft < 10
                  ? "font-extrabold text-[#C85B28]"
                  : "font-bold text-foreground"
              }
            >
              00:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
            </span>
          </div>
          <div className="flex items-center gap-1 font-bold text-[#C85B28]">
            <Award className="h-4 w-4" />
            <span>Score: {score.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <CardHeader className="pt-6 pb-3">
        <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#84966F]/30 bg-[#84966F]/10 px-3 py-0.5 text-xs font-bold text-[#17382B] dark:text-[#E8CCA4]">
          <Sparkles className="h-3 w-3 text-[#DE9E66]" />
          {q.category}
        </div>
        <CardTitle className="pt-2.5 text-lg leading-snug font-extrabold text-foreground md:text-xl">
          {q.question}
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Negative marking: -0.25 for incorrect answers • Select the single best
          answer.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Options */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {q.options.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx)
            const isChosen = selectedOption === idx
            const isCorrect = idx === q.correctAnswer

            let optionClasses =
              "relative flex items-center gap-3 p-4 rounded-2xl border text-sm font-semibold transition-all text-left cursor-pointer select-none"

            if (!isSubmitted) {
              if (isChosen) {
                optionClasses +=
                  " border-[#17382B] bg-[#F4EDE4] text-[#17382B] dark:border-[#DE9E66] dark:bg-[#1A3325] dark:text-[#E8CCA4] shadow-sm"
              } else {
                optionClasses +=
                  " border-border/80 bg-card hover:border-[#17382B]/60 hover:bg-[#F4EDE4]/40"
              }
            } else {
              if (isCorrect) {
                optionClasses +=
                  " border-[#00A884] bg-[#00A884]/10 text-[#00A884] font-bold"
              } else if (isChosen && !isCorrect) {
                optionClasses +=
                  " border-[#C85B28] bg-[#C85B28]/10 text-[#C85B28] line-through"
              } else {
                optionClasses += " border-border/40 opacity-40"
              }
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(idx)}
                disabled={isSubmitted}
                className={optionClasses}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-xs font-black transition-colors ${
                    isSubmitted && isCorrect
                      ? "bg-[#00A884] text-white"
                      : isSubmitted && isChosen && !isCorrect
                        ? "bg-[#C85B28] text-white"
                        : isChosen
                          ? "bg-[#17382B] text-white dark:bg-[#DE9E66] dark:text-[#17382B]"
                          : "bg-[#F4EDE4] text-foreground dark:bg-[#182E22]"
                  }`}
                >
                  {letter}
                </span>
                <span className="flex-1 text-sm">{option}</span>
                {isSubmitted && isCorrect && (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00A884]" />
                )}
                {isSubmitted && isChosen && !isCorrect && (
                  <XCircle className="h-4 w-4 shrink-0 text-[#C85B28]" />
                )}
              </button>
            )
          })}
        </div>

        {/* Explanation Card */}
        {isSubmitted && (
          <div className="animate-in rounded-2xl border border-[#DE9E66]/30 bg-[#F4EDE4]/60 p-4 text-xs leading-relaxed duration-300 fade-in slide-in-from-top-2 dark:bg-[#182E22]/60">
            <div className="mb-1 flex items-center gap-1.5 font-bold text-foreground">
              <span className="font-mono text-[#17382B] dark:text-[#E8CCA4]">
                💡 In-Depth Explanation:
              </span>
            </div>
            <p className="text-muted-foreground">{q.explanation}</p>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-3">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Restart Test
          </Button>

          <div className="flex items-center gap-2">
            {!isSubmitted ? (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="gap-2 rounded-xl bg-[#17382B] px-6 py-2.5 font-bold text-white shadow-md shadow-[#17382B]/20 hover:bg-[#11291F]"
              >
                Submit Answer
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleNext}
                className="gap-2 rounded-xl bg-[#00A884] px-6 py-2.5 font-bold text-white shadow-md shadow-[#00A884]/20 hover:bg-[#008F7A]"
              >
                Next Question &rarr;
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
