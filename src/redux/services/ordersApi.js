import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../apiConfig";

const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ({ limit, text, sinceId = "", status }) => ({
        url: `/orders?limit=${limit}&text=${text}&since_id=${sinceId}&status=${status}`,
        method: "GET",
      }),
      providesTags: ["orders"],
    }),
    getOrderById: builder.query({
      query: ({ id }) => ({
        url: `/orders?id=${id}`,
        method: "GET",
      }),
      providesTags: ["orders"],
    }),
  }),
});

export const { useGetOrdersQuery, useGetOrderByIdQuery } = ordersApi;
export default ordersApi;
