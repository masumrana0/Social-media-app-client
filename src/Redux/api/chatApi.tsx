import { IConversation, IMessage } from "@/types/chat";
import { baseApi } from "./baseApi";

const chatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createConversation: build.mutation({
      query: (data: IConversation) => ({
        url: `/conversation`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["conversation"],
    }),
    sendMessage: build.mutation({
      query: (data: IMessage) => ({
        url: `/message`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["message"],
    }),
    getConversations: build.query({
      query: () => ({
        url: `/conversation`,
        method: "GET",
      }),
      providesTags: ["conversation"],
    }),
    getMesages: build.query({
      query: (id: string) => ({
        url: `/message/${id}`,
        method: "GET",
      }),
      providesTags: ["message"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateConversationMutation,
  useSendMessageMutation,
  useGetConversationsQuery,
  useGetMesagesQuery,
} = chatApi;
