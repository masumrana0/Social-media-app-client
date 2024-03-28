export interface INotification {
  category: string;
  user: {
    profilePicture: string;
    name: {
      firstName: string;
      lastName: string;
    };
  };
  time: string;
}
