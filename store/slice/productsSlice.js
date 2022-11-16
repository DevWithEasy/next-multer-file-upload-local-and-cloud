import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        cart:[],
    },
    reducers: {
        addCart:(state,action)=>{

        },
        removeCart:(state,action)=>{

        },
        adjustQty:(state,action)=>{

        }
    }
})
export const {addCart,removeCart,adjustQty} = productSlice.actions
export default productSlice.reducer
