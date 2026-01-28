import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
  name: "bag",
  initialState: {
    bagItems: [],
  },
  reducers: {
    addToBag: (state, action) => {
      const item = state.bagItems.find((p) => p.id === action.payload.id);

      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.bagItems.push({ ...action.payload, quantity: 1 });
      }
    },

    updateBag: (state, action) => {
      state.bagItems = state.bagItems.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },

    removeFromBag: (state, action) => {
      state.bagItems = state.bagItems.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { addToBag, updateBag, removeFromBag } = bagSlice.actions;

export default bagSlice.reducer;
