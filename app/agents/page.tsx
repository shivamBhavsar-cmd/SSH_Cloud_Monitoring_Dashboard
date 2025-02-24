"use client"

import { useAuth } from "../contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import MenuBar from "../components/MenuBar"
import TopAgents from "../components/top-agents"
import AgentsEvolution from "../components/agents-evolution"

export default function AgentsPage() {
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
        <h1 className="text-3xl font-bold">Agents</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-medium mb-4">Top 5 agents</h2>
            <TopAgents />
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-medium mb-4">Alerts evolution - Top 5 agents</h2>
            <AgentsEvolution />
          </div>
        </div>
      </div>
    </div>
  )
}

