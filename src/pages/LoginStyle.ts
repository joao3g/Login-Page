import { createGlobalStyle } from "styled-components"; 
import styled from "styled-components";

interface GlobalStyleProps {
    DarkTheme: Boolean
}

interface ForgotPasswordProps{
  marginTop?: number;
}

interface FlexRowProps{
  width?: number;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${props => props.DarkTheme ? "#093545" : "#E5E5E5"};
    margin: 0px;
    padding: 0px;
  }
`;

export const Wrapper = styled.div`
  background-color: transparent;

  height: 60%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  h1{
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 64px;

    color: #224957;
  };

  span{
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: #224957;
  }
`;

export const FlexColumn = styled.div`
  background-color: transparent;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items:center;

  text-align: center;
`;

export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  flex-direction: row;

  width: ${props => props.width ? `${props.width}px` : `318px` };

  justify-content: space-between;
  align-items:center;

  text-align: center;
`;

export const ForgotPassword = styled.span<ForgotPasswordProps>`
  cursor: pointer;

  color: #000 !important;

  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : `16px` };

  font-family: 'Montserrat', sans-serif !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 14px !important;
  line-height: 17px;
`;