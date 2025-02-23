import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {

    addItem: (state, action) => {
      const found = state.items.find(item => item.id === action.payload.id);
      if (!found) {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    updateQuantity: (state, action) => {
      const found = state.items.find(item => item.id === action.payload.id);
      if (found) {
        found.quantity = action.payload.quantity;
      }
    }

  }
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
