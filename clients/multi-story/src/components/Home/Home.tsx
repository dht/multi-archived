import React from 'react';
import { Wrapper } from './Home.style';
import { Multi, One } from '@mult/core';

export type HomeProps = {};

export function Home(_props: HomeProps) {
    return (
        <Wrapper className='Home-wrapper' data-testid='Home-wrapper'>
            <Multi />
            <One />
        </Wrapper>
    );
}

export default Home;
