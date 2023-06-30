import { accordionActionsClasses, avatarClasses } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartItems");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log("Error loading state from local storage:", error);
    return undefined;
  }
};

const initialState = () => {
  const stateFromLocalStorage = loadStateFromLocalStorage();
  return stateFromLocalStorage;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const newItem = payload;
      state.value.push(newItem);
      state.amount += newItem.price;

      const cartItems = {
        value: state.value,
        amount: state.amount,
      };
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },
    removeItem: (state, { payload }) => {
      const itemId = payload;
      const itemToRemove = state.value.find((item) => item?._id === itemId);
      if (itemToRemove) {
        state.amount -= itemToRemove.price;
        state.value = state.value.filter((item) => item?._id !== payload);
      }
      const cartItems = {
        value: state.value,
        amount: state.amount,
      };
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },
    clearCart: (state) => {
      state.value = [];
      state.amount = 0;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
