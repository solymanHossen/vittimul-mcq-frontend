import type { Metadata, Viewport } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: "Vittimul MCQ — Live MCQ & Exam Preparation Platform",
    template: "%s | Vittimul MCQ",
  },
  description:
    "Next-generation live competitive examination, model test, and MCQ preparation platform with real-time rankings and in-depth performance analytics.",
  keywords: [
    "Vittimul MCQ",
    "Live MCQ",
    "Online Exam",
    "Job Preparation",
    "BCS",
    "Model Test",
    "Quiz",
    "Competitive Exams",
  ],
  authors: [{ name: "Solyman Hossen" }],
  creator: "Solyman Hossen",
  openGraph: {
    title: "Vittimul MCQ — Live MCQ & Exam Preparation Platform",
    description:
      "Prepare for competitive exams with real-time live MCQs, instant rankings, and comprehensive topic analytics.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
