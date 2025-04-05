import { createSelector, createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    addedToCart: {},
  },

  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1});
      };
      state.addedToCart[name] = true;
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter(item => item.name !== name);
      delete state.addedToCart[name];
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name)
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
}); 

export const calculateTotalQuantity = createSelector(
  (state) => state.cart.items,
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
