
import axios from "axios"
import { takeEvery, put } from "redux-saga/effects"
import { api } from "../../allApis/Api"
import { DataStr } from "../actions/getDataAction"

function* getProduct() {
    let result = yield axios({
        method: "get",
        url: api.getCatData,
    })
    result = yield result?.data;
    yield put({type: DataStr.setData, result})
    console.log("Call Api Data=>>>>",DataStr.setData, result)
}

function* categorieSaga() {
    yield takeEvery(DataStr.getData, getProduct)
}

export default categorieSaga