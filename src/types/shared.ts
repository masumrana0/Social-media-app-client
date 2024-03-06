export type IName = {
  firstName: string;
  lastName?: string;
};

export type IUserSpecificField = {
  userId?: string;
  name: IName;
  profilePicture?: string;
};
