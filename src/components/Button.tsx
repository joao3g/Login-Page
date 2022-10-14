import React from "react";
import styled from "styled-components";

interface ButtonProps {
    backgroundColor: string;

    width?: number;
    height?: number;

    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

interface FormButtonProps {
    backgroundColor: string;
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;

    width?: number;
    height?: number;

    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

const Button = styled.button<ButtonProps>`
    cursor: pointer;

    background-color: ${props => `${props.backgroundColor}`};

    text-align: center;

    width: ${props => props.width ? `${props.width}px` : `300px`};
    height: ${props => props.height ? `${props.height}px` : `45px`};

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    border: 0px;

    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : `0px`};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : `0px`};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : `0px`};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : `0px`};

    span{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;

        line-height: 20px;
  
        color: #224957;
      }

`;

export function FormButton(props:FormButtonProps) {
    return(
        <Button 
            marginTop={props.marginTop} 
            marginRight={props.marginRight} 
            marginBottom={props.marginBottom} 
            marginLeft={props.marginLeft}

            width={props.width}
            height={props.height}

            
            backgroundColor={props.backgroundColor}
            onClick={props.onClick}
        >
            <span>{props.text}</span>
        </Button>
    );
}
