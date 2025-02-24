"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MetricsOverview from "./metrics-overview"
import AlertsEvolution from "./alerts-evolution"
import MitreAttack from "./mitre-attack"
import TopAgents from "./top-agents"
import AlertsTable from "./alerts-table"
import AgentsEvolution from "./agents-evolution"

export default function SecurityDashboard() {
  const [month, setMonth] = useState("Jan-Feb")
  const [year, setYear] = useState("2024")

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="h-6 border-l mx-2" />
          <span className="text-muted-foreground">Events</span>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
          <Select defaultValue={month} onValueChange={setMonth}>
            <SelectTrigger className="w-[120px]">
              <SelectValue>{month}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Jan-Feb">Jan-Feb</SelectItem>
              <SelectItem value="Mar-Apr">Mar-Apr</SelectItem>
              <SelectItem value="May-Jun">May-Jun</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue={year} onValueChange={setYear}>
            <SelectTrigger className="w-[100px]">
              <SelectValue>{year}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <MetricsOverview />

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h2 className="text-lg font-medium mb-4">Alerts level evolution</h2>
          <AlertsEvolution />
        </Card>
        <Card className="p-4">
          <h2 className="text-lg font-medium mb-4">MITRE ATT&CK</h2>
          <MitreAttack />
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h2 className="text-lg font-medium mb-4">Top 5 agents</h2>
          <TopAgents />
        </Card>
        <Card className="p-4">
          <h2 className="text-lg font-medium mb-4">Alerts evolution - Top 5 agents</h2>
          <AgentsEvolution />
        </Card>
      </div>

      <Card className="p-4">
        <h2 className="text-lg font-medium mb-4">Security alerts</h2>
        <AlertsTable />
      </Card>
    </div>
  )
}

