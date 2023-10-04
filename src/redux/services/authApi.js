import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../apiConfig";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    signIn: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/auth/forgot",
        method: "POST",
        body: email,
      }),
    }),
    resetPassword: builder.mutation({
      query: (credentials) => ({
        url: "/auth/reset",
        method: "PUT",
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    profileUpdate: builder.mutation({
      query: (credentials) => ({
        url: "/auth/update",
        method: "PUT",
        body: credentials,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useResetPasswordMutation,
  useGetCurrentUserQuery,
  useProfileUpdateMutation,
  useForgotPasswordMutation,
} = authApi;
export default authApi;
