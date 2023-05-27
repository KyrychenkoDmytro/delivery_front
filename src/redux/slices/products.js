import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (productName) => {
    const { data } = await axios.get(`/products/${productName}`);
    return data;
})

const initialState = {
    items: [],
    productName: 'burger',
    status: 'loading',
    modelId: '',
    isHeaderVisible: true,
}

const productsSclice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeActiveProductName(state, action) {
            state.productName = action.payload;
        }
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.items = [];
            state.status = 'loading';
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'loaded';
        },
        [fetchProducts.rejected]: (state) => {
            state.items = [];
            state.status = 'error';
        }
    }
})

export const { changeActiveProductName } = productsSclice.actions;

export default productsSclice.reducer;