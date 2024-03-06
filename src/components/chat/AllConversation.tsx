"use client";
import { useGetConversationsQuery } from "@/Redux/api/chatApi";
import React from "react";
import ConversaionCard from "./ConversaionCard";
import { IConversation } from "@/types/chat";

const AllConversation = () => {
  const { data: conversations } = useGetConversationsQuery(null);

  return (
    <div>
      {conversations?.map((conversation: IConversation) => (
        <ConversaionCard conversation={conversation} key={conversation?._id} />
      ))}
    </div>
  );
};

export default AllConversation;
