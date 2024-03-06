import { IConversation } from "@/types/chat";
import { baseApi } from "./baseApi";

const chatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createConversation: build.mutation({
      query: (data: IConversation) => ({
        url: `conversation`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["conversation"],
    }),
    getConversations: build.query({
      query: () => ({
        url: `conversation`,
        method: "GET",
      }),
      providesTags: ["conversation"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateConversationMutation, useGetConversationsQuery } =
  chatApi;
