import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { REHYDRATE } from "redux-persist";

import { ILink } from '../../types/types';

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ssl.bitly.com/v4",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Bearer 07d7aaec94e17a2d8950fb2f19c065543951333b"
      );
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
//   extractRehydrationInfo(action, { reducerPath }) {
//     if (action.type === REHYDRATE) {
//       return action.payload[reducerPath];
//     }
//   },
  tagTypes: ["Link"],
  endpoints: (builder) => ({
    postUrl: builder.mutation<ILink, { long_url: string }>({
      query: (data) => ({
        method: "POST",
        url: "/shorten",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Link" }],
    }),
  }),
});

export const { usePostUrlMutation } = api;
