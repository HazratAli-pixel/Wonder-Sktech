import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../ExtraComponent/Loading';
import { AuthContext } from '../UserContext/UserContext';

const Privateroute = ({children}) => {

    const location = useLocation();

    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to="/signin" state={{from : location}} replace={true}></Navigate>
};

export default Privateroute;