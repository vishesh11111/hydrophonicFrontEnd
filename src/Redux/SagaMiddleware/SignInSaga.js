import { takeEvery, put, call } from "redux-saga/effects"
import { api } from "../../allApis/Api"
import { DataStr, SignInData, SignUpData } from "../actions/getDataAction"
import {GetdataById} from "../actions/getDataAction"
import axios from "axios"

function* getProduct(action) {
    const payload = yield call(SignInData,action?.payload);;
    console.log("sdsfdf,..,.,<><><</></>", payload?.payload)
    let result = yield axios({
        method: "post",
        url: api.signIn,
        data: payload?.payload
    })
    console.log("{}}{{{///////////",result);
    result = yield result?.data?.data;
    localStorage.setItem("user", JSON.stringify(result));
}

function* SignInDate() {
    yield takeEvery(DataStr.SignIn, getProduct)
}

export default SignInDate