
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { GetCart, GetdataById, SetCartData } from '../../../Redux/actions/getDataAction';
import Button from '@mui/material/Button';
import "./css/product.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const GetProductById = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const getData = useSelector((e) => e?.getDataById)
    const { _id } = JSON.parse(localStorage.getItem("user")) || {_id:0}

    
    useEffect(() => {
        dispatch(GetdataById(id))
        dispatch(SetCartData(_id))
    }, [id, dispatch]);

    

    const AddToCart = (data) => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("sdsdsMayBE", data, user);
        if (user == "null" || user == null) {
            toast.error("SignIn First!")
            setTimeout(() => {  
                navigate("/signup")
              }, 1000);
        } else {
            const cartData = {
                categoriId: data?.categoriId,
                productId: data?._id,
                userId: user?._id,
            }
            // console.log("sdfdMakejab---<>", cartData)
            dispatch(GetCart(cartData))
            dispatch(SetCartData(_id))
            toast.success("Add Product in Cart succefully")
        }
    }


    return (
        <div>
            <div className='home-main-2'>
                {getData?.categories?.map((item) => (
                    <div className='home-main-3' key={item?._id}>
                        <div className='home-img'>
                            <img src={item?.image} />
                        </div>
                        <div className='home-main-4'>
                            <div><h4>{item?.name}</h4></div>
                            <div><p>₹ {item?.price}</p></div>
                            <div className='home-main-5'><p>{item?.des}</p></div>
                        </div>
                        <div className='product-id-1'>
                            <div onClick={() => AddToCart(item)}> <Button variant="contained" >
                                Add to Cart
                            </Button></div>
                            <div> <Button variant="contained" disableElevation>
                                Contact Us
                            </Button></div>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    )
}
