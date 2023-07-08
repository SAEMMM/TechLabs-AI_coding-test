import React from "react";
import styled, { css } from "styled-components";
import Calendar from "../elements/Calendar";
import Inputs from "../elements/Inputs";
import Selects from "../elements/Selects";
import MultiSelects from "../elements/MultiSelects";
import { Button } from 'antd';
import Chart from "../elements/Chart";

function Main() {
  return (
    <Layout>
      <Container>
        <h1>쇼핑인사이트 키워드 연령별 트렌드 조회</h1>

        <InputContainer>
          <InputBox>
            <InputLabel>시작일자:</InputLabel> <Calendar />
          </InputBox>
          <InputBox>
            <InputLabel>종료일자:</InputLabel> <Calendar />
          </InputBox>
          <InputBox>
            <InputLabel>카테고리:</InputLabel> <Inputs />
          </InputBox>
          <InputBox>
            <InputLabel>키워드:</InputLabel> <Inputs />
          </InputBox>
        </InputContainer>

        <SelectContainer>
            <Selects />
            <MultiSelects />
            <Selects />
            <Selects />
            <Button type="primary">조회</Button>
        </SelectContainer>

        <Chart />
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
  background-color: gray;
`;

const Container = styled.div`
  width: 900px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  padding: 50px 20px 0px 20px;
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
const SelectContainer = styled.div`
  width: 100%;
  justify-content: center;
  ${flexRow};
  margin-bottom: 30px;
`;
