import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import llama from "../../../assets/llama.svg";
import { IEmptyContainerProps, IEmptyProps } from "../types";

const Container = styled.div<IEmptyContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ containerHeight }) =>
    containerHeight ? containerHeight : "50vh"};
`;

const StyledImg = styled.img`
  width: 200px;
  margin-bottom: 30px;
`;

const EmptyView = ({ text, btn, containerHeight }: IEmptyProps) => {
  return (
    <Container containerHeight={containerHeight}>
      <StyledImg src={llama} alt="empty page" />
      <Typography fontWeight={700}>{text}</Typography>
      {btn}
    </Container>
  );
};

export default EmptyView;
