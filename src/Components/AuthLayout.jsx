// mechanism to protect the route and pages 
import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function AuthLayout({children,authentication = "true"}) {
    const Navigate = useNavigate();
    const [Loader,setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.Status)

    useEffect(() => {
        // todo make logic more simpler 
        if(authentication && authStatus !== authentication){
            Navigate('/login');
        }
        else if(!authentication && authStatus !== authentication){
            Navigate('/');
        }
        setLoader(false);
    },[authStatus,Navigate,authentication])
    return Loader ? <h1>Loading...</h1> : <>{children}</>
}

export default AuthLayout