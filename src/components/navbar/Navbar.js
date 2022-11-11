
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./css/navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { SetCartData } from '../../Redux/actions/getDataAction'


export const NavbarNv = () => {
    const [count, setCount] = useState(0)
    const getData = useSelector((e) => e.cartData)
    const dis = useDispatch()

    const [state, setState] = useState(0);

    const getdata = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {

    }, [state, getdata])
    console.log("dfdsfffgdg+", state)
    useEffect(() => {

    }, [count]);

    return (
        <div className='navbar-main-1'>
            <div className='navbar-main-2'>
                <div className='navbar-h3'><h3>AcmeFresh</h3></div>
                <div>
                    <Link className='navbar-main-4' to="/">Home</Link>
                </div>
                <div>
                    <Link className='navbar-main-4' to="/devices">Devices</Link>
                </div>
                <div>
                    <Link className='navbar-main-4' to="/products">Product</Link>
                </div>
            </div>
            <div className='navbar-main-3'>
                {!getdata ? <div>
                    <Link className='navbar-main-4' to="/signin" onClick={() => {
                        setState(state++);
                    }}>SignIn</Link>
                </div> : null}
                {!getdata ? <div>
                    <Link className='navbar-main-4' to="/signup" onClick={() => {
                        setState(state++);
                    }}>SignUp</Link>
                </div> : null}
                {getdata ? <div>
                    <Link className='navbar-main-4' onClick={() => {
                        localStorage.removeItem("user")
                        setState(state++);
                    }}>SignOut</Link>
                </div> : null}
                <div>
                    <Link className='navbar-main-4' to="/cart" onClick={() => {
                        setCount(count++)
                    }}>Cart({getData?.data?.length})</Link>
                </div>
            </div>

        </div>
    )
}
