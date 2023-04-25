import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <h2>Loading</h2>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{form:location}} replace></Navigate>
};

export default PrivateRoute;