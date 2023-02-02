import React from 'react';
import { Wrapper } from './Button.style';

export type ButtonProps = {};

export function Button(_props: ButtonProps) {
    return (
        <Wrapper className="Button-wrapper" data-testid="Button-wrapper">
            Button
        </Wrapper>
    );
}

export default Button;
