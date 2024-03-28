"use client";
import { useGetConversationsQuery } from "@/Redux/api/chatApi";
import React, { useEffect } from "react";
import ConversaionCard from "./ConversaionCard";
import { IConversation } from "@/types/chat";
import { setConversation } from "@/Redux/Slices/chatSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";

const AllConversation = () => {
  const dispatch = useAppDispatch();
  const { data: conversations } = useGetConversationsQuery(null);

  useEffect(() => {
    // Move the dispatch to useEffect to avoid updating state during rendering
    if (conversations?.length > 0) {
      const lastConversation = conversations[0];
      dispatch(setConversation(lastConversation));
    }
  }, [conversations, dispatch]);
  const lastConversation = useAppSelector((state) => state.chatSlice);
  // console.log(lastConversation);

  return (
    <div>
      {conversations?.map((conversation: IConversation) => (
        <ConversaionCard conversation={conversation} key={conversation?._id} />
      ))}
    </div>
  );
};

export default AllConversation;
