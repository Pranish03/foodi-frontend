import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bagItems: [],
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,

  reducers: {
    addToBag: (state, action) => {
      const item = state.bagItems.find(
        (m) =>
          m.id === action.payload.id &&
          m.selectedOption === action.payload.selectedOption,
      );
      if (item) {
        item.quantity += 1;
        item.price = item.oneQuantityPrice * item.quantity;
      } else {
        state.bagItems.push({
          ...action.payload,
          quantity: 1,
          price: action.payload.oneQuantityPrice,
        });
      }
    },

    updateBag: (state, action) => {
      const { id, selectedOption, key, val } = action.payload;
      const item = state.bagItems.find(
        (m) => m.id === id && m.selectedOption === selectedOption,
      );
      if (!item) return;
      if (key === "quantity") {
        item.quantity = val;
        item.price = item.oneQuantityPrice * val;
      } else {
        item[key] = val;
      }
    },

    removeFromBag: (state, action) => {
      const { id, selectedOption } = action.payload;
      state.bagItems = state.bagItems.filter(
        (m) => !(m.id === id && m.selectedOption === selectedOption),
      );
    },

    clearBag: (state) => {
      state.bagItems = [];
    },
  },
});

export const { addToBag, updateBag, removeFromBag, clearBag } =
  bagSlice.actions;

export default bagSlice.reducer;

export const selectTotalBagItems = (state) =>
  state.bag.bagItems.reduce((sum, item) => sum + item.quantity, 0);
