export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-4">
      {/* Background ambient rose/peach & forest glows from palette */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#E8CCA4]/30 opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#84966F]/20 opacity-70 blur-3xl" />
      <div className="relative z-10 flex w-full max-w-md justify-center">
        {children}
      </div>
    </main>
  )
}
