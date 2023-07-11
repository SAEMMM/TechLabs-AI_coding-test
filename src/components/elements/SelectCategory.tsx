import React from "react";
import { Select } from "antd";

interface SelectCategoryProps {
  onOptionChange: (value: string) => void;
}

function SelectCategory({ onOptionChange }: SelectCategoryProps) {
  const handleChange = (value: string) => {
    onOptionChange(value);
  };

  return (
    <>
      <Select
        defaultValue="Category"
        style={{ width: 130 }}
        onChange={handleChange}
        options={[
          {
            label: "남성",
            options: [
              { label: "수트/셋업", value: "50000840" },
              { label: "상의", value: "50000830" },
              { label: "아우터", value: "50000838" },
            ],
          },
          {
            label: "여성",
            options: [
              { label: "원피스", value: "50000807" },
              { label: "상의", value: "50000803" },
              { label: "아우터", value: "50000806" },
            ],
          },
          {
            label: "반려동물",
            options: [
              { label: "강아지/고양이", value: "50000155" },
            ],
          },
        ]}
      />
    </>
  );
}

export default SelectCategory;
