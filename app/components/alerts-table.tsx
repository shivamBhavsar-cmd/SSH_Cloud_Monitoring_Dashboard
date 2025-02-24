"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const alerts = [
  {
    time: "Jan 22, 2024 @ 09:55:20.518",
    agent: "004",
    agentName: "Windows",
    technique: "T1218",
    tactic: "Defense Evasion",
    description: "Signed Script Proxy Execution: CertUtil Windows...",
    level: "10",
    ruleId: "255563",
  },
  // Add more alerts as needed
]

export default function AlertsTable() {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Agent</TableHead>
            <TableHead>Agent name</TableHead>
            <TableHead>Technique(s)</TableHead>
            <TableHead>Tactic(s)</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Rule ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alerts.map((alert, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{alert.time}</TableCell>
              <TableCell>{alert.agent}</TableCell>
              <TableCell>{alert.agentName}</TableCell>
              <TableCell>{alert.technique}</TableCell>
              <TableCell>{alert.tactic}</TableCell>
              <TableCell>{alert.description}</TableCell>
              <TableCell>{alert.level}</TableCell>
              <TableCell className="text-blue-600">{alert.ruleId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

