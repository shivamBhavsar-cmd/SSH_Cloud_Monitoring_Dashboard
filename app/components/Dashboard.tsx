"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MetricsOverview from "./metrics-overview"
import { supabase } from "../lib/supabase"

export default function Dashboard() {
  const [ipAddress, setIpAddress] = useState("")
  const [sshLog, setSshLog] = useState("")
  const [sshId, setSshId] = useState("")
  const [results, setResults] = useState<null | {
    totalAttempts: number
    failedAttempts: number
    detectedAttacks: number
  }>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Save log data to Supabase
      const { data, error } = await supabase
        .from("logs")
        .insert({ ip_address: ipAddress, ssh_log: sshLog, ssh_id: sshId })

      if (error) throw error

      // For this example, we'll still generate random results
      // In a real application, you'd analyze the log data here
      setResults({
        totalAttempts: Math.floor(Math.random() * 1000),
        failedAttempts: Math.floor(Math.random() * 100),
        detectedAttacks: Math.floor(Math.random() * 10),
      })
    } catch (error) {
      console.error("Error saving log data:", error)
      // Handle error (show message to user, etc.)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <Card>
        <CardHeader>
          <CardTitle>Enter Log Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="ipAddress" className="block text-sm font-medium text-gray-700">
                IP Address
              </label>
              <Input
                id="ipAddress"
                placeholder="e.g., 192.168.1.1"
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="sshLog" className="block text-sm font-medium text-gray-700">
                SSH Log
              </label>
              <Textarea
                id="sshLog"
                placeholder="Enter SSH log details..."
                value={sshLog}
                onChange={(e) => setSshLog(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="sshId" className="block text-sm font-medium text-gray-700">
                SSH ID
              </label>
              <Input
                id="sshId"
                placeholder="Enter SSH ID"
                value={sshId}
                onChange={(e) => setSshId(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Generate Results</Button>
          </form>
        </CardContent>
      </Card>

      {results && (
        <Card>
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            <MetricsOverview
              totalAttempts={results.totalAttempts}
              failedAttempts={results.failedAttempts}
              detectedAttacks={results.detectedAttacks}
            />
          </CardContent>
        </Card>
      )}
    </div>
  )
}

