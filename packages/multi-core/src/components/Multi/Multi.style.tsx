import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const WrapperViews = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40px;
    border-radius: 5px;
    display: flex;
    background-color: #223;
    left: -60px;
    top: 30px;
`;

export const TabsWrapper = styled.div`
    height: 32px;
    margin-top: 35px;
    border-bottom: 1px solid #556;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Content = styled.div`
    padding: 40px 20px 10px;
    flex: 1;
    display: flex;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding: 20px 50px 20px 30px;
`;

export const H1 = styled.h1`
    font-variation-settings: 'wdth' 100, 'wght' 200;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
`;

export const Stats = styled.div`
    padding-right: 2vw;

    span {
        color: palevioletred;
    }
`;
