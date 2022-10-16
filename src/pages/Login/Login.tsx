import React, { useState, useEffect } from "react";

import { FormButton } from "../../components/Button";
import { FormCheckbox } from "../../components/Checkbox";
import { Footer } from "../../components/Footer";
import { Icon } from "../../components/ThemeIcon";
import { FormInput } from "../../components/Input";
import { Form, FlexRow, ForgotPassword, GlobalStyle, Title, Caption, Wrapper } from "./LoginStyle"

import { useDarkMode } from "usehooks-ts";

import { useAuth } from "../../main"

import { useLocation, useNavigate } from "react-router-dom"


export function Login() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const { isDarkMode, toggle, enable, disable } = useDarkMode();

    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/home";

    useEffect(() => {
        if(auth.user != ""){
            console.log(from)
            navigate(from, {replace: true});
        }
    }, [])

    const handleLogin = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        /* Fetch in API if the Login is correctly */

        auth.signin(login, remember, () => {
            console.log(from)
            navigate(from, {replace: true});
        })
    }

    const handleForgotPassword = () => {
        console.log("User click at Forgot Password");
    }

    const handleCheckbox = () => {
        remember ? setRemember(false) : setRemember(true);
    }

    return (
        <React.Fragment>
            <GlobalStyle backgroundColor={isDarkMode ? "#093545" : "#E5E5E5"} />
            <Wrapper>
                <Title color={isDarkMode ? "#FFF" : "#224957"}>Sign in</Title>
                <Caption color={isDarkMode ? "#FFF" : "#224957"}>Sign in and start managing your candidates!</Caption>
                <Form
                    onSubmit={handleLogin}
                >
                    <FormInput
                        placeholder="Login"
                        marginTop={32}
                        type="text"
                        onChange={(e) => setLogin(e.target.value)}
                        value={login}
                    />

                    <FormInput
                        placeholder="Password"
                        marginTop={32}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <FlexRow>
                        <FormCheckbox
                            id="remember"
                            label="Remember me"
                            colorLabel={isDarkMode ? "#FFF" : "#093545"}
                            onClick={handleCheckbox}
                            checked={remember}
                        />

                        <ForgotPassword
                            onClick={handleForgotPassword}
                            color={isDarkMode ? "#20DF7F" : "#000"}
                        > Forgot Password? </ForgotPassword>
                    </FlexRow>

                    <FormButton
                        text="Login"
                        backgroundColor="#20DF7F"
                        color={isDarkMode ? "#FFF" : "#224957"}
                        marginTop={32}
                        width={
                            /* 300px (width FormInput) + 18px (Padding Left placeholder FormInput)*/
                            318
                        }
                    />
                </Form>
            </Wrapper>
            <Footer
                darkTheme={isDarkMode}
            />
            <Icon
                onClick={toggle}
            />
        </React.Fragment>
    );
}