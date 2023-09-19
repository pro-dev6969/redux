import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems'
const initialState = {
  cartItems: cartItems,
  amount: 6,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    clear:(state)=>{state.cartItems = [];}
    // Note : whatever we return from here , will become the state(initialState) value
  },
  removeItem: (store, action) => {
    const itemId = action.payload;
    store.cartItems = store.cartItems.filter(
      (item) => item.id !== itemId
    );
  },
});

// console.log(cartSlice);

export const {clear , removeItem} = cartSlice.actions;

export default cartSlice.reducer;