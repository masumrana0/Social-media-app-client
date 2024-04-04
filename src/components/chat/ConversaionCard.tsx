/**
 * Title: 'Conversation card'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 06-03-2024
 *
 */
"use client";
import Image from "next/image";
import React from "react";
import { IConversation } from "@/types/chat";
import { getParticipantData } from "@/utils/chat.utils";
import { IName, IUserCommonData } from "@/types/shared";
import FullName from "@/service/name.service";
import { useAppDispatch } from "@/Redux/hooks";
import { setConversation } from "@/Redux/Slices/chatSlice";
import { useSocketContext } from "@/Socket/socketContext";

const ConversaionCard = ({ conversation }: { conversation: IConversation }) => {
  const { onlineUsers } = useSocketContext();

  // redux
  const dispatch = useAppDispatch();

  // essential need data
  const participantData = getParticipantData(conversation) as IUserCommonData;
  const fullName = FullName(participantData?.name as IName);

  const isActiveUser = onlineUsers.includes(participantData.userId as string);

  return (
    <div
      // onClick={() => dispatch(setConversation(conversation as IConversation))}
      className="flex  cursor-pointer  gap-2 border rounded-lg w-full shadow-md bg-gray-100 mb-2 "
    >
      <div className="w-[60px] h-[60px] relative rounded-lg overflow-hidden   ">
        <span
          className={`${isActiveUser ? "bg-green-500" : "bg-gray-400"}  absolute  h-3 w-3 rounded-full`}
        ></span>

        <Image
          className="w-full h-full object-cover  "
          src={participantData?.profilePicture as string}
          alt="Masum Rana"
          width={100}
          height={200}
        />
      </div>
      <div className="py-2">
        <h3 className="font-bold"> {fullName}</h3>
        <div className="flex items-center justify-between gap-10">
          <span className="text-sm"> Hi, i am jony lynetin...</span>
        </div>
      </div>
    </div>
  );
};

export default ConversaionCard;
