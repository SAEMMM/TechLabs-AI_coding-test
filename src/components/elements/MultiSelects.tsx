import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";

function MultiSelects() {
  const options: SelectProps["options"] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <Select
        mode="tags"
        allowClear
        style={{ width: "150px"}}
        bordered={false}
        placeholder="age"
        onChange={handleChange}
        options={options}
      />
    </>
  );
}

export default MultiSelects;