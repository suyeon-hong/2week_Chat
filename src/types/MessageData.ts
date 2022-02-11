export interface User = {
  userId: string;
  username:string;
}
export interface IMessageData {
  chatId: string;
  profileImage: string | undefined;
  content: string;
  date: Date;
  user: User;
}
