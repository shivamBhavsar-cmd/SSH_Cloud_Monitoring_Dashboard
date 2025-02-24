"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan 1", macOS: 4000, Centos: 3000, RHEL7: 2000, Windows: 1000, Debian: 500 },
  { name: "Jan 2", macOS: 3500, Centos: 2800, RHEL7: 2200, Windows: 1200, Debian: 600 },
  { name: "Jan 3", macOS: 4200, Centos: 3200, RHEL7: 1800, Windows: 900, Debian: 400 },
  { name: "Jan 4", macOS: 3800, Centos: 2900, RHEL7: 2100, Windows: 1100, Debian: 550 },
]

const COLORS = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE", "#DBEAFE"]

export default function AgentsEvolution() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {Object.keys(data[0])
            .slice(1)
            .map((key, index) => (
              <Bar key={key} dataKey={key} stackId="a" fill={COLORS[index]} />
            ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

