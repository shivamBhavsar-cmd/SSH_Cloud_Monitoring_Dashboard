import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"
import { Button } from "@/components/ui/button"

export default function MenuBar() {
  const { logout } = useAuth()

  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold">
          Cloud Monitor
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/alerts">Alerts</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/agents">Agents</Link>
          </Button>
          <Button variant="ghost" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}

