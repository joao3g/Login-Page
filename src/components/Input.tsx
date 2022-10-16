import styled from "styled-components";

interface InputProps {
    width?: number;
    height?: number;

    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

interface FormInputProps {
    placeholder?: string;
    type?: string;
    name?: string;

    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;

    width?: number;
    height?: number;

    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

const Input = styled.input<InputProps>`
    width: ${props => props.width ? `${props.width}px` : `300px`};
    height: ${props => props.height ? `${props.height}px` : `45px`};

    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : `0px`};
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : `0px`};
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : `0px`};
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : `0px`};

    background-color: #224957;
    border-radius: 10px;
    border: 0px;

    padding-left: 18px;

    color: #FFF;
    
    ::placeholder{
        color: #FFF;
        opacity: 1;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }


`;

export function FormInput(props:FormInputProps) {
    return(
        <Input 
            marginTop={props.marginTop} 
            marginRight={props.marginRight} 
            marginBottom={props.marginBottom} 
            marginLeft={props.marginLeft}

            width={props.width}
            height={props.height}

            name={props.name}
            placeholder={props.placeholder}
            type={props.type}

            onChange={props.onChange}
            value={props.value}
        />
    );
}
