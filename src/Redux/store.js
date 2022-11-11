import { GetReducerData } from "./Reducers/getDataReducer";
import categorieSaga  from "./SagaMiddleware/CategoriesSaga"
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import BycategorieSaga from "./SagaMiddleware/getByIDCategories";
import SignUpDate from "./SagaMiddleware/SignUpSaga";
import SignInDate from "./SagaMiddleware/SignInSaga";
import CartDate from "./SagaMiddleware/CartSaga";
import CarteSaga from "./SagaMiddleware/GetCartDataSaga";
import ProductsSaga from "./SagaMiddleware/ProductSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: GetReducerData,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(categorieSaga)
sagaMiddleware.run(BycategorieSaga);
sagaMiddleware.run(SignUpDate)
sagaMiddleware.run(SignInDate)
sagaMiddleware.run(CartDate)
sagaMiddleware.run(CarteSaga)
sagaMiddleware.run(ProductsSaga)

export default store;