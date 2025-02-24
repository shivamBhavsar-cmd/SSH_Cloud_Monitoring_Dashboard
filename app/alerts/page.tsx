"use client"

import { useAuth } from "../contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import MenuBar from "../components/MenuBar"
import AlertsEvolution from "../components/alerts-evolution"
import MitreAttack from "../components/mitre-attack"
import AlertsTable from "../components/alerts-table"

export default function AlertsPage() {
  const { isLoggedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return null // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-background">
      <MenuBar />
      <div className="container mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold">Alerts</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-medium mb-4">Alerts level evolution</h2>
            <AlertsEvolution />
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-medium mb-4">MITRE ATT&CK</h2>
            <MitreAttack />
          </div>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-medium mb-4">Security alerts</h2>
          <AlertsTable />
        </div>
      </div>
    </div>
  )
}

