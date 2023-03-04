import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "62ce465bbbmsh07496081a85cdc7p177094jsn93f012aed0e8"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChartList: builder.query({ query: () => "charts/track" }),
  }),
});

export const { useGetChartListQuery } = shazamApi;
