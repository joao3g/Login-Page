import { GlobalStyle, Wrapper, Title, Caption } from "./Login/LoginStyle"
import { useRouteError } from "react-router-dom";

import { useDarkMode } from "usehooks-ts";

export function ErrorPage () {
    const error:any = useRouteError();
    console.log(error)

    const { isDarkMode } = useDarkMode();
    return (
        <>
            <GlobalStyle backgroundColor={isDarkMode ? "#093545" : "#E5E5E5"} />
            <Wrapper>
                <Title color={isDarkMode ? "#FFF" : "#093545"}> Oops! </Title>
                <Caption color={isDarkMode ? "#FFF" : "#224957"}> Sorry, an unexpected error has occurred. </Caption> <br /> <br />
                <Caption color={"#f00"}>{error.statusText || error.message}</Caption>
            </Wrapper>
        </>
    )
}