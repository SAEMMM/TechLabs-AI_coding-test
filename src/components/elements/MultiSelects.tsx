import React, { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import styled from "styled-components";

interface MultiSelectsProps {
  checkedList: string[];
  onCheckedListChange: (newCheckedList: string[]) => void;
}

function MultiSelects({checkedList, onCheckedListChange}: MultiSelectsProps) {
  const CheckboxGroup = Checkbox.Group;

  const plainOptions = ["10대", "20대", "30대", "40대", "50대", "60대"];

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    onCheckedListChange(list as string[]);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const newCheckedList = e.target.checked ? plainOptions : [];
    onCheckedListChange(newCheckedList as string[]);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <StyledMultiContainer>
      <StyledCheckbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        모두 선택하기
      </StyledCheckbox>
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

const StyledCheckbox = styled(Checkbox)`
  font-weight: 700;
  margin-right: 20px;
`;
