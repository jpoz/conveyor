import { Bar, BarChart, ResponsiveContainer, Tooltip, Legend, XAxis, YAxis } from "recharts"
import useSWR from 'swr';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetcher } from '@/lib/fetcher';

type JobStat = {
  name: string,
  success: number,
  error: number,
  failure: number,
}

type JobTimeline = {
  timeline: JobStat[]
}

export default function JobsTimeline() {
  const { data, error, isLoading } = useSWR<JobTimeline>('/jobs/timeline.json', fetcher);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error Loading Overview...</div>
  }

  if (!data) {
    return null
  }

  return (
    <div className="mr-10 ml-8 mb-10">
      <ResponsiveContainer height={350}>
        <BarChart data={data.timeline}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={true}
            axisLine={false}
          />
          <Legend />
          <Tooltip content={<JobsTooltip />} cursor={{ stroke: '#3C82F6', strokeWidth: 1, fillOpacity: 0 }}  />
          <Bar dataKey="success" fill="#17A34A" stackId="a" />
          <Bar dataKey="error" fill="#F97315" stackId="a" />
          <Bar dataKey="failure" fill="#E11D48" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
const JobsTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{label}</CardTitle>
        </CardHeader>
        <CardContent>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex justify-between">
              <div style={{ color: entry.color }} className="mr-2">{entry.name}</div>
              <div>{entry.value}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return null;
};
