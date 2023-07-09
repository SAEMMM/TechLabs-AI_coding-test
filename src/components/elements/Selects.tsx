import { Select, SelectProps } from "antd";
import React from "react";
import styled from "styled-components";

interface SelectsProps {
  options: { value: string; label: string }[];
  onOptionChange: (value: string) => void;
}

function Selects({ options, onOptionChange }: SelectsProps) {
  const handleChange = (value: string) => {
    onOptionChange(value);
  };
  
  return (
    <>
      <StyledSelect
        defaultValue={options[0].value}
        bordered={false}
        options={options}
        onChange={handleChange}
      />
    </>
  );
}

export default Selects;

const StyledSelect = styled(Select)<SelectProps<string>>`
  width: 110px;
  text-align: center;
`;
