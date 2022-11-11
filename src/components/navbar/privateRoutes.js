
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
export const PrivateRoutes = ({ Component }) => {

    const data = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    useEffect(() => {
        if (!data) {
            navigate('/signin')
        }
    })
    
    if (data) {
        return (<Component />)
    }
}
