
import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./css/signin.css"
import { SignInData } from '../../Redux/actions/getDataAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const OnSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: e?.target?.email?.value,
            password: e?.target?.password?.value
        }
        dispatch(SignInData(data));
        const getdata = JSON.parse(localStorage.getItem("user"));
        toast.success("SignIn Suceefully")
        if (getdata !== null || getdata !== "null") {
            setTimeout(
                navigate("/")
                , 800);
        } else {
            toast.error("Login First!")
        }

    }

    return (
        <div className='signIn-main-1'>
            <div><h3>SignIn</h3></div>
            <div>
                <form className='signIn-form' onSubmit={(e) => OnSubmit(e)}>
                    <div>
                        <TextField name="email" fullWidth id="demo-helper-text-misaligned-no-helper" label="Email" />
                    </div>
                    <div>
                        <TextField name="password" fullWidth id="demo-helper-text-misaligned-no-helper" label="Password" />
                    </div>
                    <Button type='submit' variant="contained" disableElevation>
                        SignUp
                    </Button>
                </form>
            </div>
            <div>
                <a href='/signup'>SignUp from here {"> >"}</a>
            </div>
            <ToastContainer />
        </div>
    )
}
