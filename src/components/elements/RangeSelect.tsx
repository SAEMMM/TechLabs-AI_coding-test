import React from 'react'
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

function RangeSelect() {
    const onChange = (e: RadioChangeEvent) => {
        console.log(`radio checked:${e.target.value}`);
      }
  return (
    <Radio.Group onChange={onChange} defaultValue="date">
      <Radio.Button value="date">일간</Radio.Button>
      <Radio.Button value="week">주간</Radio.Button>
      <Radio.Button value="month">월간</Radio.Button>
    </Radio.Group>
  )
}

export default RangeSelect