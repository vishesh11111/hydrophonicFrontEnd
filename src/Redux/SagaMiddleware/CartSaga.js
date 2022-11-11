
import { takeEvery, put, call } from "redux-saga/effects"
import { api } from "../../allApis/Api"
import { DataStr, GetCart } from "../actions/getDataAction"
import { GetdataById } from "../actions/getDataAction"
import axios from "axios"

function* getProduct(action) {
    const payload = yield call(GetCart, action?.payload);
    let result = yield axios({
        method: "post",
        url: api.cart,
        data: payload?.payload
    });

    result = yield result?.data?.data;
    // yield put({ type: DataStr.SetCart, result })
}

function* CartDate() {
    yield takeEvery(DataStr.GetCart, getProduct)
}

export default CartDate