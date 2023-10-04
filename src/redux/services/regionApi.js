import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../apiConfig";

const regionApi = createApi({
  reducerPath: "regionApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => ({
        url: `/places/countries?page=1&limit=0`,
        method: "GET",
      }),
    }),
    getCities: builder.query({
      query: ({ id }) => ({
        url: `/places/cities?country=${id}&page=1&limit=0`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCitiesQuery, useGetCountriesQuery } = regionApi;
export default regionApi;
