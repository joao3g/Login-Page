import React, { useState } from "react";
import { FormButton } from "../components/Button";
import { FormCheckbox } from "../components/Checkbox";
import { Footer } from "../components/Footer";
import { Icon } from "../components/ThemeIcon";
import { FormInput } from "../components/Input";
import { FlexColumn, FlexRow, ForgotPassword, GlobalStyle, Title, Caption, Wrapper } from "./LoginStyle"

export function Login() {

    const [darkTheme, setDarkTheme] = useState(false);

    const clickButton = () => {
        console.log("Login action!");
    }

    const handleForgotPassword = () => {
        console.log("User click at Forgot Password");
    }

    const handleThemeChanger = () => {
        darkTheme ? setDarkTheme(false) : setDarkTheme(true);
    }

    return(
        <React.Fragment>
            <GlobalStyle darkTheme={darkTheme}/>
            <Wrapper>
                <Title color={darkTheme ? "#FFF" : "#224957"}>Sign in</Title>
                <Caption color={darkTheme ? "#FFF" : "#224957"}>Sign in and start managing your candidates!</Caption>
                <FlexColumn>
                    <FormInput 
                        placeholder="Login" 
                        marginTop={32}
                        type="email"
                    />
                    
                    <FormInput 
                        placeholder="Password" 
                        marginTop={32}
                        type="password"
                    />

                    <FlexRow>
                        <FormCheckbox
                            id="remember"
                            label="Remember me"
                            colorLabel={darkTheme ? "#FFF" : "#093545"}
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
                        onClick={clickButton}
                        width={
                            /* 300px (width FormInput) + 18px (Padding Left placeholder FormInput)*/
                            318
                        }
                    />
                </FlexColumn>
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