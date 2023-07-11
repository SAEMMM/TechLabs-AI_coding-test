import React, { useState } from "react";
import styled, { css } from "styled-components";
import Calendar from "../elements/Calendar";
import Inputs from "../elements/Inputs";
import Selects from "../elements/Selects";
import MultiSelects from "../elements/MultiSelects";
import { Button, Modal } from "antd";
import Chart from "../elements/Chart";
import RangeSelect from "../elements/RangeSelect";
import { useDispatch } from "react-redux";
import { getShopFetch } from "../../slice/shopState";
import SelectCategory from "../elements/SelectCategory";

function Main() {
  const dispatch = useDispatch();

  // 기간 조회
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const handleStartDateChange = (startDate: string | null) => {
    setStartDate(startDate !== null ? startDate : null);
  };

  const handleEndDateChange = (endDate: string | null) => {
    setEndDate(endDate !== null ? endDate : null);
  };

  // 카테고리, 키워드 조회
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleKeywordChange = (value: string) => {
    setKeyword(value);
  };

  // 나이대 조회
  const [ages, setAges] = useState<string[]>([]);

  const handleCheckedListChange = (list: string[]) => {
    setAges(list);
  };

  // 기간 조회
  const [timeUnit, setTimeUnit] = useState("date");

  const handleRangeChange = (selectedRange: string) => {
    setTimeUnit(selectedRange);
  };

  // 성별, 기기 조회
  const genderOptions = [
    { value: "all", label: "성별 전체" },
    { value: "m", label: "남성" },
    { value: "f", label: "여성" },
  ];

  const [gender, setGender] = useState("");

  const genderChange = (value: string) => {
    setGender(value);
  };

  const deviceOptions = [
    { value: "all", label: "기기 전체" },
    { value: "pc", label: "PC" },
    { value: "mo", label: "모바일" },
  ];

  const [device, setDevice] = useState("");

  const deviceChange = (value: string) => {
    setDevice(value);
  };

  // 필수 입력 유효성 검사
  const config = {
    title: "필수 입력 누락",
    content: (
      <>
        {!startDate && <span>'시작날짜' </span>}
        {!endDate && <span>'종료날짜' </span>}
        {!category && <span>'카테고리' </span>}
        {!keyword && <span>'키워드' </span>}
        {!timeUnit && <span>'구간' </span>}
        <span>
          을(를) <br />
          반드시 입력해주세요!
        </span>
      </>
    ),
  };

  const [modal, contextHolder] = Modal.useModal();

  // 조회하기 핸들러
  const submitHandler = () => {
    if (!startDate || !endDate || !timeUnit || !category || !keyword) {
      modal.error(config);
    } else {
      const data = {
        startDate,
        endDate,
        category,
        keyword,
        ages,
        timeUnit,
        gender,
        device,
      };
      dispatch(getShopFetch(data));
    }
  };

  return (
    <Layout>
      {contextHolder}
      <Container>
        <BackgroundShadow>
          <h1>쇼핑인사이트 키워드 연령별 트렌드</h1>

          <InputContainer>
            <InputBox>
              <InputLabel>기간:</InputLabel>{" "}
              <Calendar
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                onStartDateChange={handleStartDateChange}
                onEndDateChange={handleEndDateChange}
              />
            </InputBox>

            <InputBox>
              <InputLabel>카테고리:</InputLabel>{" "}
              <SelectCategory onOptionChange={handleCategoryChange} />
            </InputBox>
            <InputBox>
              <InputLabel>키워드:</InputLabel>{" "}
              <Inputs onValueChange={handleKeywordChange} />
            </InputBox>
          </InputContainer>

          <MiddelContainer>
            <MultiSelects
              checkedList={ages}
              onCheckedListChange={handleCheckedListChange}
            />
          </MiddelContainer>

          <SelectContainer>
            <RangeSelect onRangeChange={handleRangeChange} />
            <Selects options={genderOptions} onOptionChange={genderChange} />
            <Selects options={deviceOptions} onOptionChange={deviceChange} />
            <StyledBtn type="text" onClick={submitHandler}>
              조회하기 📃
            </StyledBtn>
          </SelectContainer>

          <Chart />
        </BackgroundShadow>
      </Container>
    </Layout>
  );
}

export default Main;

const flexRow = css`
  display: flex;
  align-items: center;
`;

const Layout = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 900px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  padding: 50px 20px 0px 20px;
`;

const BackgroundShadow = styled.div`
  padding: 30px 15px 50px 15px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 4px 4px 10px 2px #dbdbdb;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 80px;
  justify-content: space-around;
  ${flexRow}
`;

const InputBox = styled.div`
  ${flexRow}
`;

const InputLabel = styled.p`
  margin-right: 10px;
`;

const MiddelContainer = styled.div`
  width: 100%;
  padding: 5px;
  justify-content: space-around;
  ${flexRow};
`;

const SelectContainer = styled.div`
  width: 100%;
  padding: 5px;
  justify-content: center;
  ${flexRow};
  margin-top: 10px;
  margin-bottom: 30px;
`;

const StyledBtn = styled(Button)`
  font-weight: 700;
  line-height: 20px;
  margin-left: 20px;
`;
