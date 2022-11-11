
import axios from "axios"
import { takeEvery, put, call } from "redux-saga/effects"
import { api } from "../../allApis/Api"
import { DataStr, SetCartData } from "../actions/getDataAction"

function* getProduct(action) {
    const payload = yield call(SetCartData, action?.payload);
    console.log("<><><><><><><><", payload?.payload)
    let result = yield axios({
        method: "get",
        url: `${api.cart}?userId=${payload?.payload}`,
    })
    result = yield result?.data;
    yield put({ type: DataStr.SetCart, result })
}

function* CarteSaga() {
    yield takeEvery(DataStr.GetDataCart, getProduct)
}

export default CarteSaga