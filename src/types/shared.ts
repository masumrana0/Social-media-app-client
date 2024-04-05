import { ReactNode } from "react";

export type IName = {
  firstName: string;
  lastName?: string;
};

export type IUserCommonData = {
  userId?: string;
  name: IName;
  profilePicture?: string;
};

export interface IDecodedToken {
  userId: string;
  userName: string;
  role: "normal_user" | "admin";
  email: string;
}

export interface IDropdownOption {
  key: string;
  label: ReactNode | string | any;
}
