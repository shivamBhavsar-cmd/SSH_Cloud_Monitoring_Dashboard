import { Card, CardContent } from "@/components/ui/card"

interface MetricsOverviewProps {
  totalAttempts: number
  failedAttempts: number
  detectedAttacks: number
}

export default function MetricsOverview({ totalAttempts, failedAttempts, detectedAttacks }: MetricsOverviewProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardContent className="pt-6">
          <div className="text-sm font-medium text-muted-foreground mb-1">Total Attempts</div>
          <div className="text-2xl font-bold text-blue-600">{totalAttempts}</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="text-sm font-medium text-muted-foreground mb-1">Failed Attempts</div>
          <div className="text-2xl font-bold text-red-600">{failedAttempts}</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <div className="text-sm font-medium text-muted-foreground mb-1">Detected Attacks</div>
          <div className="text-2xl font-bold text-red-600">{detectedAttacks}</div>
        </CardContent>
      </Card>
    </div>
  )
}

