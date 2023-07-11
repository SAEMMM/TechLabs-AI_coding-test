import React from "react";
import { Checkbox } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import styled from "styled-components";

interface MultiSelectsProps {
  checkedList: string[];
  onCheckedListChange: (newCheckedList: string[]) => void;
}

function MultiSelects({checkedList, onCheckedListChange}: MultiSelectsProps) {
  const CheckboxGroup = Checkbox.Group;

  const plainOptions = ["10", "20", "30", "40", "50", "60"];


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
