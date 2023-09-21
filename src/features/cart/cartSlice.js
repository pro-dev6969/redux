import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems'
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    clear:(state)=>{state.cartItems = [];},
    removeItem: (store, action) => {
      const itemId = action.payload;
      store.cartItems = store.cartItems.filter(
        (item) => item.id !== itemId
      );
    },
    increase: (store, action) => {
      const target_item = store.cartItems.find(
        (item) => item.id === action.payload.id
      );
      target_item.amount++;
    },
    decrease: (store, { payload }) => {
      const target_item = store.cartItems.find(
        (item) => item.id === payload.id
      );
      target_item.amount--;
    },
    calculate: (store) => {
      let amount = 0;
      let total = 0;
      store.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      store.amount = amount;
      store.total = total;
    },
    // Note : whatever we return from here , will become the state(initialState) value
  },
  
});

// console.log(cartSlice);

export const { clear , removeItem , increase , decrease , calculate} = cartSlice.actions;

export default cartSlice.reducer;