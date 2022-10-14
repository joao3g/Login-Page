import React from "react";
import ThemeIcon from "../assets/ThemeIcon.png";
import styled from "styled-components";

interface IconProps{
    onClick: React.MouseEventHandler<HTMLImageElement>;
}

const Image = styled.img`
    cursor: pointer;

    width: 70px;
    height: 70px;
    position: fixed;
    bottom: 20px;
    left: 20px;
`;

export function Icon(props:IconProps) {
    return(
        <Image 
            src={ThemeIcon} 
            onClick={props.onClick}
        />
    );
}
