import React from "react";
import { Input } from "antd";
import styled from "styled-components";

function Inputs() {
  return (
    <>
      <StyledInput placeholder="Basic usage" />
    </>
  );
}

export default Inputs;

const StyledInput = styled(Input)`
  width: 130px;
`;
