// import { DataStr } from "../actions/getDataAction"
// import { takeEvery, put } from "redux-saga/effects"


// function* getProduct() {
// }

// function* GetCatByIdSaga() {
//     console.log("sddffdHeloo")
//     yield takeEvery(DataStr.getDataById, getProduct)
// }

// export default GetCatByIdSaga

import axios from "axios"
import { takeEvery, put, call } from "redux-saga/effects"
import { api } from "../../allApis/Api"
import { DataStr } from "../actions/getDataAction"
import {GetdataById} from "../actions/getDataAction"

function* getProduct(action) {
    const payload = yield call(GetdataById,action?.payload);
    let result = yield axios({
        method: "get",
        url: `${api.getByIdData}=${payload?.payload}`,
    })
    // console.log("sdsfdf,..,.,<><><</></>", result)
    result = yield result?.data;
    yield put({type: DataStr.setDataById, result})
}

function* BycategorieSaga() {
    yield takeEvery(DataStr.getDataById, getProduct)
}

export default BycategorieSaga
