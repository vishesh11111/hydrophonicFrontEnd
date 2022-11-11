
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../auth/SignIn'
import { SignUp } from '../auth/SignUp'
import { Devices } from '../pages/products/Devices'
import { Products } from '../pages/products/Products'
import { Cart } from "../Cart/Cart"
import { Home } from './Home'
import { GetProductById } from '../pages/products/GetProductById';
import {PrivateRoutes} from './privateRoutes'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/devices' element={<Devices/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            {/* <Route path='/cart' element={<PrivateRoutes><Cart /></PrivateRoutes>} /> */}
            <Route path='/cart' element={<PrivateRoutes Component={Cart}/>} />
            <Route path='/categoriId/:id' element={<GetProductById />} />
        </Routes>
    )
}
