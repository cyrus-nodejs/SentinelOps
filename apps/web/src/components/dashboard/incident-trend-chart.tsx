'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  { day: 'Mon', count: 4 },
  { day: 'Tue', count: 7 },
  { day: 'Wed', count: 6 },
  { day: 'Thu', count: 11 },
  { day: 'Fri', count: 9 },
  { day: 'Sat', count: 13 },
  { day: 'Sun', count: 15 },
];

export function IncidentTrendChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="count"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}