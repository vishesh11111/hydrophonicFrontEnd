import { takeEvery, put, call } from "redux-saga/effects"
import { api } from "../../allApis/Api"
import { DataStr, SignUpData } from "../actions/getDataAction"
import { GetdataById } from "../actions/getDataAction"
import axios from "axios"

function* getProduct(action) {
    const payload = yield call(SignUpData, action?.payload);;
    console.log("sdsfdf,..,.,<><><</></>", payload?.payload)
    let result = yield axios({
        method: "post",
        url: api.signUp,
        data: payload?.payload
    });
    
    result = yield result?.data;
    if (result?.status) {
        localStorage.removeItem("userlogin");
    } else {
        localStorage.setItem("userlogin", false);
    }
}

function* SignUpDate() {
    yield takeEvery(DataStr.SignUp, getProduct)
}

export default SignUpDate