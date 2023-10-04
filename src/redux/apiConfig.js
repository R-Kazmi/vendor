import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: "https://ismmart-shopify-backend-f5cbea06d9f0.herokuapp.com/api",
  // baseUrl: "http://127.0.0.1:5000/api",
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.authReducer?.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

export default baseQueryWithAuth;
