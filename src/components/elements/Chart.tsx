import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface DataItem {
  period: string;
  group: string;
  ratio: number;
}

interface ResultItem {
  title: string;
  keyword: string[];
  data: DataItem[];
}

interface ChartData {
  startDate: string;
  endDate: string;
  timeUnit: string;
  results: ResultItem[];
}

function Chart() {
  const data: ChartData[] = [
    {
      startDate: "2017-08-01",
      endDate: "2017-09-30",
      timeUnit: "month",
      results: [
        {
          title: "정장",
          keyword: ["정장"],
          data: [
            {
              period: "2017-08-01",
              group: "10",
              ratio: 9.7021,
            },
            {
              period: "2017-08-01",
              group: "20",
              ratio: 57.88466,
            },
            {
              period: "2017-09-01",
              group: "10",
              ratio: 13.55561,
            },
            {
              period: "2017-09-01",
              group: "20",
              ratio: 100,
            },
          ],
        },
      ],
    },
  ];

  const colors = ["#8884d8", "#82ca9d"];

  return (
    <ResponsiveContainer width="100%" height="40%">
      <LineChart data={data[0].results[0].data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="period" />
        <YAxis dataKey="ratio" />
        <Legend />
        <Line
          type="monotone"
          dataKey="ratio"
          name="group"
          stroke={colors[0]}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
