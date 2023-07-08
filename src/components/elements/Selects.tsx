import { Select } from "antd";
import React from "react";
import styled from "styled-components";

function Selects() {
  return (
    <>
      <StyledSelect
        defaultValue="timeUnit"
        bordered={false}
        options={[
          { value: "date", label: "date" },
          { value: "week", label: "week" },
          { value: "month", label: "month" },
        ]}
      />
    </>
  );
}

export default Selects;

const StyledSelect = styled(Select)`
  width: 100px;
  text-align: center;
`;
