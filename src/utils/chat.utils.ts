import { getUserInfo } from "@/service/auth.service";
import { IConversation } from "@/types/chat";
import { IUserCommonData } from "@/types/shared";

export const getParticipantData = (conversation: IConversation) => {
  const getInfo = getUserInfo();
  const creator = conversation.creator as IUserCommonData;
  const participant = conversation.participant as IUserCommonData;
  const userId = getInfo?.userId;
  if (creator.userId !== userId) {
    return creator;
  } else if (participant.userId !== userId) {
    return participant;
  }
};
