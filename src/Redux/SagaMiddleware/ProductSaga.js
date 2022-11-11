
import axios from "axios"
import { takeEvery, put } from "redux-saga/effects"
import { api } from "../../allApis/Api"
import { DataStr } from "../actions/getDataAction"

function* getProduct() {
    console.log("Call Api Data=>>>>IM am ",)
    let result = yield axios({
        method: "get",
        url: api.products,
    })
    result = yield result?.data;
    yield put({ type: DataStr.SetProduct, result })
}

function* ProductsSaga() {
    yield takeEvery(DataStr.GetProduct, getProduct)
}

export default ProductsSaga;
