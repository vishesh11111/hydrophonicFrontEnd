
import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./css/signin.css"
import { useDispatch } from 'react-redux';
import { SignUpData } from '../../Redux/actions/getDataAction';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';


export const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const OnSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: e?.target?.name?.value,
            email: e?.target?.email?.value,
            number: e?.target?.number?.value,
            password: e?.target?.password?.value
        }
        dispatch(SignUpData(data));
        const getdata = JSON.parse(localStorage.getItem("user"));
        if (getdata !== null || getdata !== "null") {
            toast.success("SignUp Suceefully")
            setTimeout(
                localStorage.removeItem("user")
                , 1000);
            setTimeout(
                navigate("/signup")
                , 1000);
        } else {
            toast.error("Somthing Went wrong !")
        }
    }

    return (
        <div className='signIn-main-1'>
            <div><h3>SignUp</h3></div>
            <div>
                <form className='signIn-form' onSubmit={(e) => OnSubmit(e)}>
                    <div>
                        <TextField name='name' id="demo-helper-text-misaligned-no-helper" fullWidth label="Name" />
                    </div>
                    <div>
                        <TextField name="email" fullWidth id="demo-helper-text-misaligned-no-helper" label="Email" />
                    </div>
                    <div>
                        <TextField name="number" fullWidth id="demo-helper-text-misaligned-no-helper" label="Number" />
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
                <a href='/signin'>SignIn from here {"> >"}</a>
            </div>
            <ToastContainer/>
        </div>
    )
}
