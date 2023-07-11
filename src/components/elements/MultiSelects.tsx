import React from "react";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import styled from "styled-components";

interface MultiSelectsProps {
  checkedList: string[];
  onCheckedListChange: (newCheckedList: string[]) => void;
}

function MultiSelects({ checkedList, onCheckedListChange }: MultiSelectsProps) {
  const CheckboxGroup = Checkbox.Group;

  const plainOptions = [
    { label: "10대", value: "10" },
    { label: "20대", value: "20" },
    { label: "30대", value: "30" },
    { label: "40대", value: "40" },
    { label: "50대", value: "50" },
    { label: "60대", value: "60" },
  ];

  const onChange = (list: CheckboxValueType[]) => {
    onCheckedListChange(list as string[]);
  };

  return (
    <StyledMultiContainer>
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </StyledMultiContainer>
  );
}

export default MultiSelects;

const StyledMultiContainer = styled.div`
  display: flex;
  justify-content: center;
`;
