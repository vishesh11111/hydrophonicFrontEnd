
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCart, GetDataAction, SetCartData } from '../../Redux/actions/getDataAction';
import "./css/home.css"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const Home = () => {

  const dis = useDispatch();
  const getData = useSelector((e) => e.data);
  let getData1 = JSON.parse(localStorage?.getItem("user")) || {_id:0};
  
  let _id = getData1?._id==0 ? 0 : getData1?._id;
 

  console.log("fgdfgdgdfgdfg-<", _id)

  useEffect(() => {
    dis(GetDataAction());
    dis(SetCartData(_id))
  }, [_id, dis]);

  return (
    <div className='home-main-1'>
      <div className='home-main-2'>
        {getData?.categories?.map((item) => (
          <Link className='home-link-1' to={`/categoriId/${item?._id}`} key={item?._id}>
            <div className='home-main-3' key={item?._id}>
              <div className='home-img'>
                <img src={item?.image}></img>
              </div>
              <div className='home-main-4'>
                <div><h4>{item?.name}</h4></div>
                <div className='home-main-5'><p>{item?.des}</p></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
