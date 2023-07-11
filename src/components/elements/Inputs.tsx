import React, { useState } from "react";
import { Input } from "antd";
import styled from "styled-components";

interface InputsProps {
  onValueChange: (value: string) => void;
}

function Inputs({ onValueChange }: InputsProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onValueChange(value);
  };
  return (
    <>
      <StyledInput placeholder="Keyword" value={inputValue} onChange={handleChange} />
    </>
  );
}

export default Inputs;

const StyledInput = styled(Input)`
  width: 130px;
`;
