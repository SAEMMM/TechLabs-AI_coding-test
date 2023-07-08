import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import styled from 'styled-components';

function Calendar() {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <StyledCalendar onChange={onChange} />
    </>
  );
}

export default Calendar;

const StyledCalendar = styled(DatePicker)`
  width: 130px;
`;