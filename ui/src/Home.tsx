import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

type Overview = {
  activeJobCount: number,
  activeQueueCount: number
  connectedWorkerCount: number
}

export default function Home() {
  const { data, error, isLoading } = useSWR<Overview>('/overview.json', fetcher);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error Loading Overview...</div>
  }

  return (
    <div>
      <h1 className="text-accent-foreground text-3xl">
        Overview
      </h1>
      <div className="flex items-center gap-6 p-6">
        <Card className="w-1/3">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="font-medium text-center">
              Active Jobs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.activeJobCount}</div>
          </CardContent>
        </Card>

        <Card className="w-1/3">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="font-medium text-center">
              Active Queues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.activeQueueCount}</div>
          </CardContent>
        </Card>

        <Card className="w-1/3">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="font-medium text-center">
              Connected Workers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.connectedWorkerCount}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

