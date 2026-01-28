import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bagSlice";

export default configureStore({
  reducer: {
    bag: bagSlice,
  },
});
