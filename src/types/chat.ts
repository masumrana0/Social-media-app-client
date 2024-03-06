import { IUser } from "./auth";
import { IUserSpecificField } from "./shared";

export interface IConversation {
  creator?: string | IUser;
  participant: string | IUser;
}

export interface IMessage {
  text?: string;
  attachment?: string[];
  sender: string | IUser | IUserSpecificField;
  receiver: string | IUser | IUserSpecificField;
  date_time?: Date;
  conversation_id: string;
}
