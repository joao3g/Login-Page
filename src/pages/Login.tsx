import React from "react";
import { FormButton } from "../components/Button";
import { FormCheckbox } from "../components/Checkbox";
import { Footer } from "../components/Footer";
import { FormInput } from "../components/Input";
import { FlexColumn, FlexRow, ForgotPassword, GlobalStyle, Wrapper } from "./LoginStyle"

export function Login() {

    const clickButton = () => {
        console.log("Login action!");
    }

    const handleForgotPassword = () => {
        console.log("User click at Forgot Password");
    }

    return(
        <React.Fragment>
            <GlobalStyle DarkTheme={false}/>
            <Wrapper>
                <h1>Sign in</h1>
                <span>Sign in and start managing your candidates!</span>
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
                        />

                        <ForgotPassword
                            onClick={handleForgotPassword}
                        > Forgot Password? </ForgotPassword>
                    </FlexRow>

                    <FormButton 
                        text="Login" 
                        backgroundColor="#20DF7F" 
                        marginTop={32}
                        onClick={clickButton}
                        width={
                            /* 300px (width FormInput) + 18px (Padding Left placeholder FormInput)*/
                            318
                        }
                    />
                </FlexColumn>
            </Wrapper>
            <Footer />
        </React.Fragment>
    );
}