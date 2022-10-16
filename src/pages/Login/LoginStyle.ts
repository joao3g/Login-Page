import { createGlobalStyle } from "styled-components"; 
import styled from "styled-components";

interface GlobalStyleProps {
    backgroundColor: string
}

interface ForgotPasswordProps{
  marginTop?: number;
  color: string;
}

interface FlexRowProps{
  width?: number;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${props => props.backgroundColor };
    margin: 0px;
    padding: 0px;
  }
`;

export const Title = styled.h1`
  font-family: 'Lexend Deca', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;

  color: ${(props:{color: string}) => props.color};
`;

export const Caption = styled.span`
  font-family: 'Lexend Deca', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: ${(props:{color: string}) => props.color};
`;

export const Wrapper = styled.div`
  background-color: transparent;

  height: 60%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
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

  color: ${props => props.color};

  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : `16px` };

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;