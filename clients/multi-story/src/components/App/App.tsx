import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeContainer } from '../../containers/HomeContainer';
import { Wrapper } from './App.style';

export type AppProps = {};

export function App(_props: AppProps) {
    return (
        <Wrapper className='App-wrapper' data-testid='App-wrapper'>
            <Router>
                <Routes>
                    <Route path='/' element={<HomeContainer />} />
                </Routes>
            </Router>
        </Wrapper>
    );
}

export default App;
