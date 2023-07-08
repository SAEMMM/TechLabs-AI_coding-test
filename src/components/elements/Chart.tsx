import React from "react";
import styled from "styled-components";

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
            {
              period: "2017-10-01",
              group: "10",
              ratio: 21,
            },
            {
              period: "2017-10-01",
              group: "20",
              ratio: 70,
            },
          ],
        },
      ],
    },
  ];

  const returnData = data[0].results[0].data;

  const periods = [...new Set(returnData.map((item) => item.period))];
  const groups = [...new Set(returnData.map((item) => item.group))];

  const colors = [
    "#DB7093",
    "#20B2AA",
    "#7B68EE",
    "#DB7093",
    "#A0522D",
    "#4682B4",
  ];

  // 날짜(period)별 각 연령대(group)의 ratio
  const updatedData = periods.map((period) => {
    const periodData = returnData.filter((item) => item.period === period);
    const groupData: { [group: string]: number } = {};
    groups.forEach((group) => {
      const matchingItem = periodData.find((item) => item.group === group);
      if (matchingItem) {
        groupData[group] = matchingItem.ratio;
      } else {
        groupData[group] = 0; // 데이터가 없는 경우에는 0으로
      }
    });
    return { period, ...groupData };
  });

  // 그룹별 선 그래프를 생성
  const lines = groups.map((group, index) => (
    <Line
      key={group}
      dataKey={group}
      type="monotone"
      name={`${group}대`}
      stroke={colors[index % colors.length]}
    />
  ));

  return (
    <ChartBackground>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={updatedData}>
          <CartesianGrid vertical={false} stroke="#ccc" strokeDasharray="1 3" />
          <XAxis
            dataKey="period"
            tickLine={false}
            tick={{ fontSize: 14 }}
            axisLine={{ stroke: "#ccc" }}
          />
          <YAxis
            tickLine={false}
            tick={{ fontSize: 14 }}
            axisLine={{ stroke: "#ccc" }}
            domain={[0, "dataMax"]}
          />
          <Legend wrapperStyle={{ fontWeight: "bold" }} iconType="circle" />
          {lines}
        </LineChart>
      </ResponsiveContainer>
    </ChartBackground>
  );
}

export default Chart;

const ChartBackground = styled.div`
  display: flex;
  justify-content: center;
`;
