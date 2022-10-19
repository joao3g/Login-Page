import { useAuth } from "../../main"

import { useNavigate } from "react-router-dom"

import { GlobalStyle, Wrapper, Title, Caption } from "../Login/LoginStyle"

import { useEventListener } from "usehooks-ts";
import { useEffect } from "react";

import { useDarkMode } from "usehooks-ts";
import { FormButton } from "../../components/Button";
import { Icon } from "../../components/ThemeIcon";

export function Home() {

    const auth = useAuth();

    const { isDarkMode, toggle} = useDarkMode();

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Home Page";
    },[])

    const handleLogOut = () => {
        auth.signout(() => {
            console.log("Deslogando...")
            navigate("/", {replace: true})
        })
    }


    useEventListener("beforeunload", () => console.log("Saindo da Home"))

    return (
        <>
            <GlobalStyle backgroundColor={isDarkMode ? "#093545" : "#E5E5E5"} />
            <Wrapper>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Title color={isDarkMode ? "#FFF" : "#093545"}> Home Page </Title>
                    <Caption color={isDarkMode ? "#FFF" : "#224957"}> You are logged as: <b>{auth.user}</b> </Caption> <br />
                    <Caption color={isDarkMode ? "#FFF" : "#224957"}> Remember me: <b>{auth.remember ? "On" : "Off"}</b> </Caption>
                    <FormButton
                        backgroundColor="#ef233c"
                        color="#FFF"
                        text="Sign Out"
                        marginTop={30}
                        onClick={handleLogOut}
                    />
                </div>
            </Wrapper>
            <Icon 
                onClick={toggle}
            />
        </>
    )
}