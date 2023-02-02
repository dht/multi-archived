import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Tab = styled.div<{ fontSize: number }>`
    padding: 6px 20px;
    border-radius: 5px 5px 0 0;
    white-space: nowrap;
    font-size: ${(props) => props.fontSize}px;
    border: 0px solid transparent;
    border-bottom: 1px solid #556;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;

    &:hover {
        background-color: rgba(30, 30, 40, 0.5);
    }

    &.selected {
        color: gold;
        background-color: #223;
        border: 1px solid #556;
        border-bottom-color: transparent;
    }
`;
