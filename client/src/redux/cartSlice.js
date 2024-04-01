import { createSlice } from "@reduxjs/toolkit";
import { getTotalPrice, getTotalTax } from "../features/utils/getters";

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
    return state;
}

const removeProductFromCart = (state, id) => {
    state.products = state.products.filter(product => product.id !== id);
    return state;
}

const changeTotal = (state) => {
    state.cartTotal = getTotalPrice(state.products);
    state.cartTax = getTotalTax(state.products)
    state.taxTotal = getTotalTax(state.shippingProducts);
    state.subTotal = getTotalPrice(state.shippingProducts);
    state.total = Number(state.subTotal) + Number(state.taxTotal);
    return state;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialUserState,
    reducers: {
        addToCart: (state, action) => {
            const newProduct = {...action.payload, quantity: 1}
            state = { ...state, products: [...state.products, newProduct] };
            state = changeTotal(state);
            return state;
        },
        removeFromCart: (state, action) => {
            state = removeProductFromCart(state, action.payload);
            state = changeTotal(state);
            return state;
        },
        moveToShipping: (state) => {
            state.shippingProducts = state.products;
            state = changeTotal(state);
            return state;
        },
        decrementProduct: (state, action) => {
            state = changeProductQuantity(state, action.payload, -1)
            state = changeTotal(state);
            return state;
        },
        incrementProduct: (state, action) => {
            state = changeProductQuantity(state, action.payload, 1)
            state = changeTotal(state);
            return state;
        },
        addToShipping: (state, action) => {
            state.shippingProducts = [action.payload];
            state.fromCart = false;
            state = changeTotal(state);
            return state;
        }
    }
})

export const { addToCart, removeFromCart, moveToShipping, decrementProduct, incrementProduct, addToShipping } = cartSlice.actions;
export default cartSlice.reducer;