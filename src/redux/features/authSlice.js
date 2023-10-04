import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: Cookies.get("token") ? Cookies.get("token") : "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload;
      Cookies.set("token", action.payload, { expires: 30 });
    },
    removeAuthToken: (state) => {
      state.token = "";
      Cookies.remove("token");
    },
  },
});

export const { setAuthToken, removeAuthToken } = authSlice.actions;
export default authSlice.reducer;
