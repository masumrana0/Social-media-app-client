/**
 * Title: 'Redux RTK query setup by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 21-01-2024
 *
 */
import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: [
    "user",
    "profile",
    "post",
    "comment",
    "comment_reply",
    "reaction",
    "story",
  ],
});
