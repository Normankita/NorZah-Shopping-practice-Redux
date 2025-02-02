const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name : "cart",
    initialState:{
        cartList :[],
        total: 0
    },
    reducers :{
        add(state, action){
            const updatedCart = state.cartList.concat(action.payload)
            const total= state.total + action.payload.price;
            return {...state, cartList:updatedCart, total: total}
            
        },
        remove(state, action){
            const updatedCart = state.cartList.filter(cartitem=> cartitem.id !== action.payload.id)
            const total= state.total - action.payload.price;
            return {...state, cartList:updatedCart, total: total}
        }
    }
})

export const {add, remove} = cartSlice.actions;
export const cartReducer = cartSlice.reducer