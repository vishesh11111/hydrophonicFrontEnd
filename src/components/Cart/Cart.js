
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SetCartData } from '../../Redux/actions/getDataAction';
import "./cart.css"
import Button from '@mui/material/Button';
import axios from 'axios';
import { api } from "../../allApis/Api"

export const Cart = () => {
  const dis = useDispatch();
  const [state, setState] = useState({
    totalData: 0,
  })
  const getData = useSelector((e) => e.cartData)
  const { _id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getData?.data?.map((e) => {
      console.log("?>>", Number(e?.product[0]?.price))
      setState(pre => ({ ...pre, totalData: (Number(state.totalData) + Number(e?.product[0]?.price)) }))
    })
  }, [getData]);
  console.log("statta", state.totalData)

  useEffect(() => {
    dis(SetCartData(_id))
  }, []);

  useEffect(()=>{
    // window.location.reload(false);
  },[getData]);

  const DeleteById = async (id) => {
    console.log("Id", id)
    const result = await axios({
      url: `${api.cart}/${id}`,
      method: "delete"
    })
    dis(SetCartData(_id))
    console.log("delel", result)
  }

  return (
    <div className='cart-main-0'>
      <div className='cart-main-1'>
        {getData?.data?.map((e) => (
          <div key={e?._id} className="cart-main-2">
            <div className='cart-main-3'>
              <img src={e?.product[0]?.image} />
            </div>
            <div className='cart-main-4'>
              <div><h4>{e?.product[0]?.name}</h4></div>
              <div className='cart-main-p'><p>{e?.product[0]?.des}</p></div>
            </div>
            <div> <Button fullWidth onClick={() => DeleteById(e?._id)} variant="contained" disableElevation>
              Remove getItem {"> > >"}
            </Button></div>
          </div>
        ))}
      </div>
      <div className='cart-main-5'>
        <div className='cart-main-6'>
          <h3>
            Total Price :-
          </h3>
          <p>{state?.totalData} Rs.</p>
        </div>
        <div> <Button fullWidth variant="contained" disableElevation>
          CheckOut {"> > >"}
        </Button></div>
      </div>
    </div>
  )
}
