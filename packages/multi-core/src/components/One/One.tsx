import React from 'react';
import { Wrapper } from './One.style';

export type OneProps = {};

export function One(_props: OneProps) {
    return (
        <Wrapper className="One-wrapper" data-testid="One-wrapper">
            One
        </Wrapper>
    );
}

export default One;
