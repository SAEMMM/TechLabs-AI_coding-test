import React from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

interface RangeSelectProps {
  timeUnit: string;
  onRangeChange: (range: string) => void;
}

function RangeSelect({ timeUnit, onRangeChange }: RangeSelectProps) {
  const onChange = (e: RadioChangeEvent) => {
    onRangeChange(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} defaultValue="date" value={timeUnit}>
      <Radio.Button value="date">일간</Radio.Button>
      <Radio.Button value="week">주간</Radio.Button>
      <Radio.Button value="month">월간</Radio.Button>
    </Radio.Group>
  );
}

export default RangeSelect;
