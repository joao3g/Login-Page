import React, { useState, useEffect } from "react";
import { FormButton } from "../../components/Button";
import { FormCheckbox } from "../../components/Checkbox";
import { Footer } from "../../components/Footer";
import { Icon } from "../../components/ThemeIcon";
import { FormInput } from "../../components/Input";
import { Form, FlexRow, ForgotPassword, GlobalStyle, Title, Caption, Wrapper } from "./LoginStyle"

export function Login() {

    const [darkTheme, setDarkTheme] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme))
    }, [darkTheme]);

    const handleLogin = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        /* Fetch in API if the Login is correctly */

        localStorage.setItem("Login", login);
        localStorage.setItem("Remember me", JSON.stringify(remember));

        setLogin("");
        setPassword("");
        setRemember(false);
    }

    const handleForgotPassword = () => {
        console.log("User click at Forgot Password");
    }

    const handleThemeChanger = () => {
        darkTheme ? setDarkTheme(false) : setDarkTheme(true);
    }

    const handleCheckbox = () => {
        remember ? setRemember(false) : setRemember(true);
    }

    return (
        <React.Fragment>
            <GlobalStyle backgroundColor={darkTheme ? "#093545" : "#E5E5E5"} />
            <Wrapper>
                <Title color={darkTheme ? "#FFF" : "#224957"}>Sign in</Title>
                <Caption color={darkTheme ? "#FFF" : "#224957"}>Sign in and start managing your candidates!</Caption>
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
                            colorLabel={darkTheme ? "#FFF" : "#093545"}
                            onClick={handleCheckbox}
                            checked={remember}
                        />

                        <ForgotPassword
                            onClick={handleForgotPassword}
                            color={darkTheme ? "#20DF7F" : "#000"}
                        > Forgot Password? </ForgotPassword>
                    </FlexRow>

                    <FormButton
                        text="Login"
                        backgroundColor="#20DF7F"
                        color={darkTheme ? "#FFF" : "#224957"}
                        marginTop={32}
                        width={
                            /* 300px (width FormInput) + 18px (Padding Left placeholder FormInput)*/
                            318
                        }
                    />
                </Form>
            </Wrapper>
            <Footer
                darkTheme={darkTheme}
            />
            <Icon
                onClick={handleThemeChanger}
            />
        </React.Fragment>
    );
}