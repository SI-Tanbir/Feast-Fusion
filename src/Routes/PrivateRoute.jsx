import React, { useContext } from 'react'
import { AuthContext } from '../Authprovider/Authprovider'
import { Navigate, useLocation } from 'react-router'

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user,loading}=useContext(AuthContext)

    console.log('tesing the location from privatge',location)
    
    if(loading){
        console.log(loading)
        return <>
        <span className="loading loading-spinner loading-lg"></span>

        </>
    } 
    else{
        if(user ){
            return children
        }
        else{
            return <Navigate to={'/login'} state={{from:location.pathname}}></Navigate>
        }
    }
    
 
}

export default PrivateRoute