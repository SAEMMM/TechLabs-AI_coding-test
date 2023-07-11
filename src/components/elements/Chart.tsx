import React from "react";
import styled from "styled-components";
import { Empty, Spin } from "antd";
import { useSelector } from "react-redux";

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
  const shopData = useSelector(
    (state: { shop: { shop: ChartData } }) => state.shop.shop
  );
  console.log("shopData:", shopData);

  const shopDataLoading = useSelector(
    (state: { shop: { shop: ChartData; isLoading: boolean } }) => state.shop.isLoading
  );
  console.log("shopDataLoading:", shopDataLoading);

  if (!shopData || !shopData.results || shopData.results[0].data.length === 0) {
    return <Empty />;
  }
  if (shopDataLoading) {
    return (
      <Spin tip="Loading" size="large">
        {" "}
      </Spin>
    );
  }

  const returnData = shopData.results[0].data;

  const periods = [...new Set(returnData.map((item: DataItem) => item.period))];
  const groups = [
    ...new Set(returnData.map((item: DataItem) => item.group)),
  ] as unknown[] as string[];

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
    const periodData = returnData.filter(
      (item: DataItem) => item.period === period
    );
    const groupData: { [group: string]: number } = {};
    const groups: string[] = Array.from(
      new Set(returnData.map((item: DataItem) => item.group))
    );

    groups.forEach((group: string) => {
      const matchingItem = periodData.find(
        (item: DataItem) => item.group === group
      );
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
