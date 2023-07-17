import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({
    children
}) => {
    const auth = useAuth();
    return auth ? <Navigate to="/inbox" /> : children
};

export default PublicRoute;