import WhiteThemeVectorsFooter from "../assets/WhiteThemeVectorsFooter.png";
import DarkThemeVectorsFooter from "../assets/DarkThemeVectorsFooter.png";
import styled from "styled-components";

interface FooterProps{
    darkTheme: number
}

const Image = styled.img`
    width: 100%;
    height: 111px;
    position: fixed;
    bottom: 0px;
`;

export function Footer(props:FooterProps) {
    return(
        <Image src={
            props.darkTheme ? DarkThemeVectorsFooter : WhiteThemeVectorsFooter
        } />
    );
}
