import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../hooks/useAuth.js';

function PrivateRoute(props) {
    const { token } = useAuth();
    const { Components } = props;

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (<Components />);
}

export default PrivateRoute;
