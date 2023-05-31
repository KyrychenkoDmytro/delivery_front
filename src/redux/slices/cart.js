import { createSlice } from "@reduxjs/toolkit";

const calcCoutProduct = (state) => {
    state.countProducts = state.allProducts
        .filter(item => !isNaN(item.count))
        .reduce((sum, item) => item.count + sum, 0)
}

const calcTotalCost = (state) => {
    state.totalCost = state.allProducts
        .filter(item => !isNaN(item.count))
        .reduce((sum, item) => {
            let newPrice;
            if (item.discount) {
                newPrice = Math.floor(item.price * (1 - item.discount));
            }
            return item.discount ? item.count * newPrice + sum : item.count * item.price + sum;
        }, 0);
}

const calcDiscount = (state) => {
    state.discount = state.allProducts
        .filter(item => !isNaN(item.count) && item.discount)
        .reduce((sum, item) => {
            let newPrice = Math.floor(item.price * (1 - item.discount));

            return (item.price - newPrice) * item.count + sum;
        }, 0);
}

const isProductsEmpty = (state) => {
    if (state.allProducts.length < 1) {
        state.isShopActiveInCart = {
            status: false,
            name: ''
        }
    }
}

const initialState = {
    allProducts: [],
    isShopActiveInCart: {
        status: false,
        name: ''
    },
    countProducts: 0,
    totalCost: 0,
    discount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const findProduct = state.allProducts.find((obj) => obj.id === action.payload.id);
            if (findProduct) {
                findProduct.count += action.payload.count;
            } else {
                state.allProducts.push({
                    ...action.payload,
                    count: action.payload.count,
                });
            }
            calcCoutProduct(state);
            calcTotalCost(state);
            calcDiscount(state);
        },
        changeCountProduct: (state, action) => {
            const findProduct = state.allProducts.find((obj) => obj.id === action.payload.id);
            findProduct.count = action.payload.count;

            calcCoutProduct(state);
            calcTotalCost(state);
            calcDiscount(state);
            isProductsEmpty(state);
        },
        removeProduct: (state, action) => {
            state.allProducts = state.allProducts.filter((item) => item.id !== action.payload);

            calcCoutProduct(state);
            calcTotalCost(state);
            calcDiscount(state);
            isProductsEmpty(state);
        },
        clearAllInCartSlice: (state) => {
            state.allProducts = [];
            state.countProducts = 0;
            state.totalCost = 0;
            state.discount = 0;
            state.isShopActiveInCart = {
                status: false,
                name: ''
            }
        },
        addProductsToLocalStorage: (state, action) => {
            state.allProducts = action.payload;

            calcCoutProduct(state);
            calcTotalCost(state);
            calcDiscount(state);
        },
        setActiveShopInCart: (state, action) => {
            state.isShopActiveInCart = action.payload;
        }
    }
})

export const { addProductToCart, changeCountProduct, removeProduct, clearAllInCartSlice, addProductsToLocalStorage, setActiveShopInCart } = cartSlice.actions;

export default cartSlice.reducer;