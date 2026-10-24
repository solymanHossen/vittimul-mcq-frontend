import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  const { role } = session.user
  if (role !== "ADMIN" && role !== "SUPER_ADMIN") {
    redirect("/dashboard")
  }

  return <>{children}</>
}
