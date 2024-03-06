import { IUser } from "./auth";
import { IUserCommonData } from "./shared";

export interface IConversation {
  _id?: string;
  creator?: string | IUser | IUserCommonData;
  participant: string | IUser | IUserCommonData;
}

export interface IMessage {
  text?: string;
  attachment?: string[];
  sender: string | IUser | IUserCommonData;
  receiver: string | IUser | IUserCommonData;
  date_time?: Date;
  conversation_id: string;
}
