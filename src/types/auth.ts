import { IName } from "./shared";

export interface IUser {
  name: IName;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  gender?: "male" | "female";
  year?: Date | null;
  dateOfBirth?: Date;
}
