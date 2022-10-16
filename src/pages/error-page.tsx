import { GlobalStyle, Wrapper, Title, Caption } from "./Login/LoginStyle"
import { useRouteError } from "react-router-dom";

export function ErrorPage () {
    const error:any = useRouteError();
    console.log(error)

    const darkTheme = Number(localStorage.getItem("darkTheme"));
    return (
        <>
            <GlobalStyle backgroundColor={darkTheme ? "#093545" : "#E5E5E5"} />
            <Wrapper>
                <Title color={darkTheme ? "#FFF" : "#093545"}> Oops! </Title>
                <Caption color={darkTheme ? "#FFF" : "#224957"}> Sorry, an unexpected error has occurred. </Caption> <br /> <br />
                <Caption color={"#f00"}>{error.statusText || error.message}</Caption>
            </Wrapper>
        </>
    )
}