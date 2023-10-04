import { createSlice } from "@reduxjs/toolkit";

function safeGetItem(key) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
}

function safeSetItem(key, value) {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
}

function safeRemoveItem(key) {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
}

typeof window !== "undefined";

const initialState = {
  data: safeGetItem("registeration")
    ? JSON.parse(safeGetItem("registeration"))
    : null,
};

const registerationSlice = createSlice({
  name: "registeration",
  initialState,
  reducers: {
    setRegisteration: (state, action) => {
      state.data = { ...state.data, ...action.payload };
      safeSetItem("registeration", JSON.stringify(state.data));
    },
    removeRegisteration: (state) => {
      state.data = null;
      safeRemoveItem("registeration");
    },
  },
});

export const { setRegisteration, removeRegisteration } =
  registerationSlice.actions;
export default registerationSlice.reducer;
