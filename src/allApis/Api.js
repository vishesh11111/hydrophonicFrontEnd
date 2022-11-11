

// const url = 'http://localhost:4000';
const url = 'https://hydroponic03.herokuapp.com'

export const api = {
    getCatData: `${url}/hydrophonic/categories`,
    getByIdData: `${url}/hydrophonic/products?categoriId`,
    signIn: `${url}/hydrophonic/signIn`,
    signUp: `${url}/hydrophonic/signUp`,
    cart: `${url}/hydrophonic/cart`,
    products: `${url}/hydrophonic/products`
}