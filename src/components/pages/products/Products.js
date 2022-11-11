
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { GetProductData } from '../../../Redux/actions/getDataAction';
import { GetCart, GetdataById, SetCartData } from '../../../Redux/actions/getDataAction';
import "./css/product.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';


export const Products = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    totalData: 0,
  })
  const getData = useSelector((e) => e?.productData)
  const navigate = useNavigate()
  const { _id } = JSON.parse(localStorage.getItem("user")) || {_id:0}


  useEffect(() => {
    dispatch(GetProductData());
    dispatch(SetCartData(_id))
  }, []);

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

  console.log("stattaPRODUCT", getData?.categories)

  return (
    <div className='cart-main-0'>
      <div className='cart-main-1'>
        {getData?.categories?.map((e) => (
          <div key={e?._id} className="cart-main-2">
            <div className='cart-main-3'>
              <img src={e?.image} />
            </div>
            <div className='cart-main-4'>
              <div><h4>{e?.name}</h4></div>
              <div><p>{e?.price}</p></div>
              <div className='cart-main-p'><p>{e?.des}</p></div>
            </div>
            <div onClick={() => AddToCart(e)}> <Button variant="contained" >
              Add to Cart
            </Button></div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}
