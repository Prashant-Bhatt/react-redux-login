import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getToken} from '../utils/common';
import {authActions} from '../store/authenticate';

const ProtectedRoute = () => {
    const auth = getToken(); // determine if authorized, from context or however you're doing it
    const dispatch = useDispatch();
    if(auth){
        dispatch(authActions.loginStateReferesh());
    }
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate replace to="/login" />;
}

export default ProtectedRoute