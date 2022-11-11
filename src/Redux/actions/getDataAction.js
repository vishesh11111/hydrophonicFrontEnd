
export const DataStr = {
    getData: "GETDATA",
    setData: "SETDATA",
    getDataById: "GETDATABY",
    setDataById: "SETDATABYID",
    SignIn: "SIGNIN",
    SignUp: "SIGNUP",
    GetCart: "GETCART",
    GetDataCart: "GETCARTDATA",
    SetCart: "SETCART",
    GetProduct: "GETPRODUCT",
    SetProduct: "SETPRODUCT"
}


export const GetDataAction = (data) => {
    return {
        type: DataStr.getData,
        payload: data
    }
}

export const GetdataById = (ID) => {
    console.log("dara-----<", ID)
    return {
        type: DataStr.getDataById,
        payload: ID,
    }
}

export const SignInData = (ID) => {
    console.log("dara-----<", ID)
    return {
        type: DataStr.SignIn,
        payload: ID,
    }
}
export const SignUpData = (ID) => {
    console.log("dara-----<", ID)
    return {
        type: DataStr.SignUp,
        payload: ID,
    }
}
export const GetCart = (data) => {
    console.log("dara-----<myyyside", data);

    return {
        type: DataStr.GetCart,
        payload: data,
    }
}

export const SetCartData = (data) => {
    console.log("dsddffsfs<><><[[[[[[[[[[", data)
    return {
        type: DataStr.GetDataCart,
        payload: data,
    }
}

export const GetProductData = (data) => {
    console.log("dsddffsfs<><><[[[[[[[[[[MAM", data)
    return {
        type: DataStr.GetProduct,
        payload: data,
    }
}