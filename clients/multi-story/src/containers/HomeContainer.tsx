import React from 'react';
import Home from '../components/Home/Home';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const HomeContainer = () => {
    return <Home />;
};

export default HomeContainer;
