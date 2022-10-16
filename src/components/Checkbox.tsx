import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import styled from "styled-components";

interface FormCheckboxProps {
    id: string;

    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    checked?: Checkbox.CheckedState;

    label?: string;
    fontSizeLabel?: number;
    colorLabel?: string;

    backgroundColor?: string;
    width?: number;
    height?: number;

    colorMark?: string;

    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

interface LabelProps{
    fontSizeLabel?: number;
    colorLabel?: string;
}

interface StyledCheckboxProps{
    backgroundColor?: string;
    width?: number;
    height?: number;
}

interface FlexProps{
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

interface StyledIndicatorProps{
    colorMark?: string;
}

const StyledCheckbox = styled(Checkbox.Root)<StyledCheckboxProps>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : `#224957` };

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    width: ${props => props.width ? `${props.width}px` : `20px` };
    height: ${props => props.height ? `${props.height}px` : `20px` };

    border: 0px;
    border-radius: 5px;

`;

const StyledIndicator = styled(Checkbox.Indicator)<StyledIndicatorProps>`
    color: ${props => props.colorMark ? `${props.colorMark} !important` : `#FFF !important` };
`;

const Label = styled.label<LabelProps>`
    cursor: pointer;

    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: ${props => props.fontSizeLabel ? `${props.fontSizeLabel}px` : `14px` };
    line-height: 17px;

    color: ${props => props.colorLabel ? props.colorLabel : `#093545` };
    user-select: none;

    margin-left: 12px;
`;

const Flex = styled.div<FlexProps>`
    display: flex;

    justify-content: center;
    align-items: center;

    margin-top: ${props => props.marginTop ? `${props.marginTop}px` : `16px` };
    margin-right: ${props => props.marginRight ? `${props.marginRight}px` : `0px` };
    margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : `0px` };
    margin-left: ${props => props.marginLeft ? `${props.marginLeft}px` : `0px` };
`;

export function FormCheckbox(props:FormCheckboxProps){
    return (
        <Flex
            marginTop={props.marginTop}
            marginRight={props.marginRight}
            marginBottom={props.marginBottom}
            marginLeft={props.marginLeft}
        >
            <StyledCheckbox
                id={props.id}
                onClick={props.onClick}
                checked={props.checked}
            >
                <StyledIndicator>
                    <CheckIcon />
                </StyledIndicator>
            </StyledCheckbox>
            <Label 
                fontSizeLabel={props.fontSizeLabel}
                colorLabel={props.colorLabel}
                htmlFor={props.id}
            >
                {props.label}
            </Label>
        </Flex>
    );
}

