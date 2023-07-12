import React from "react";
import dayjs from 'dayjs';
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import styled from "styled-components";

interface CalendarProps {
  startDate: string | null;
  endDate: string | null;
  setStartDate: React.Dispatch<React.SetStateAction<string | null>>;
  setEndDate: React.Dispatch<React.SetStateAction<string | null>>;
  onStartDateChange: (startDate: string | null) => void;
  onEndDateChange: (endDate: string | null) => void;
}

function Calendar({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onStartDateChange,
  onEndDateChange,
}: CalendarProps) {
  const startDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    setStartDate(dateString);
    onStartDateChange(dateString);
  };

  const endDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    setEndDate(dateString);
    onEndDateChange(dateString);
  };

  const startValue = startDate ? dayjs(startDate) : null;
  const endValue = endDate ? dayjs(endDate) : null;

  return (
    <>
      <StyledCalendar
        value={startValue}
        placeholder="시작일"
        onChange={startDateChange}
        style={{ marginRight: "15px" }}
      />
      <StyledCalendar
        value={endValue}
        placeholder="종료일"
        onChange={endDateChange}
      />
    </>
  );
}

export default Calendar;

const StyledCalendar = styled(DatePicker)`
  width: 130px;
`;
