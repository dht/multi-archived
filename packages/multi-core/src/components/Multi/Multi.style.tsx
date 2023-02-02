import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
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
    height: 33px;
    margin-top: 15px;
    padding-left: 20px;
    border-bottom: 1px solid #556;
`;

export const Content = styled.div`
    padding: 40px 20px 10px;
    flex: 1;
    display: flex;
`;
