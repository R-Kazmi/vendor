import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../apiConfig";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["products"],
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    getProducts: builder.query({
      query: ({ limit, text, sinceId = "", status }) => ({
        url: `/products?limit=${limit}&text=${text}&since_id=${sinceId}&status=${status}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/products/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    getProductById: builder.query({
      query: ({ id }) => `/products?id=${id}`,
      providesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useAddProductMutation,
} = productsApi;
export default productsApi;
