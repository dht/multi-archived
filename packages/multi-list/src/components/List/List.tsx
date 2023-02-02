import React from 'react';
import { Wrapper } from './List.style';

export type ListProps = {};

export function List(_props: ListProps) {
    return (
        <Wrapper className="List-wrapper" data-testid="List-wrapper">
            List
        </Wrapper>
    );
}

export default List;
