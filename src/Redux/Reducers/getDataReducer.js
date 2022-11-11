import { DataStr } from "../actions/getDataAction"

const init = {
    data: [],
    getDataById: [],
    cartData: [],
    productData:[],
}

export const GetReducerData = (state = init, action) => {
    switch (action.type) {
        case (DataStr.setData):
            return { ...state, data: action?.result }
        case (DataStr.setDataById):
            return { ...state, getDataById: action?.result }
        case (DataStr.SetCart):
            return { ...state, cartData: action?.result }
            case (DataStr.SetProduct):
                return { ...state, productData: action?.result }
        default:
            return state;
    }
}