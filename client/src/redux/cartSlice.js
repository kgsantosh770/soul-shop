import { createSlice, current } from "@reduxjs/toolkit";

const initialUserState = {
    products: [],
    fromCart: true,
    shippingProducts: [],
    cartTotal: 0,
    cartTax: 0,
    totalTax: 0,
    subTotal: 0,
    total: 0,
};

const changeProductQuantity = (state, id, value) => {
    const product = state.products.find(product => product.id === id);
    if (product && (value > 0 || product.quantity > 1))
        product.quantity += value;
    else if (product && value < 0 && product.quantity <= 1)
        state = removeProductFromCart(state, id);
    else
        console.log(`Product with id:${id} not found in cart.`);
}

const removeProductFromCart = (state, id) => {
    state.products = state.products.filter(product => product.id !== id);
    return state;
}

const changeTotal = (state) => {
    state.cartTotal = state.products.reduce((total, product) => total + product.price, 0);
    state.cartTax = state.products.reduce((taxTotal, product) => taxTotal + product.tax, 0);
    state.taxTotal = state.shippingProducts.reduce((total, product) => total + product.tax, 0);
    state.subTotal = state.shippingProducts.reduce((total, product) => total + product.price, 0);
    state.total = state.subTotal + state.shippingProducts.reduce((taxTotal, product) => taxTotal + product.tax, 0);
    return state;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialUserState,
    reducers: {
        addToCart: (state, action) => {
            state = { ...state, products: [...state.products, action.payload] };
            state = changeTotal(state);
            return state;
        },
        removeFromCart: (state, action) => {
            state = removeProductFromCart(state, action.payload);
            state = changeTotal(state);
            return state;
        },
        moveToShipping: (state) => state.shippingProducts = state.products,
        decrementProduct: (state, action) => {
            changeProductQuantity(state, action.payload.id, -1)
            changeTotal(state);
        },
        incrementProduct: (state, action) => {
            changeProductQuantity(state, action.payload.id, 1)
            changeTotal(state);
        },
        addToShipping: (state, action) => {
            state.shippingProducts = [action.payload];
            state.fromCart = false;
            changeTotal(state);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;