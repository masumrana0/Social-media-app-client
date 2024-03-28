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

export interface ILogin {
  email: string;
  password: string;
}

export type IName = {
  firstName: string;
  lastName?: string;
};

// export type IUser = {
//   name: IName;
//   email: string;
//   password: string;
// };

export interface IDecodedToken {
  userid: string;
  userName: string;
  role: "normal_user" | "admin";
  email: string;
}

export type ILoginUserResponse = {
  accessToken?: string;
  isEmailVerified?: boolean;
};
