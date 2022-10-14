import VectorsFooter from "../assets/VectorsFooter.png";
import styled from "styled-components";

const Image = styled.img`
    width: 100%;
    height: 111px;
    position: fixed;
    bottom: 0px;
`;

export function Footer() {
    return(
        <Image src={VectorsFooter} />
    );
}
