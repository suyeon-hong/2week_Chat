export interface IMessageData {
  chatId: string;
  userId: string;
  userName: string;
  profileImage: string | undefined;
  content: string;
  date: string | Date;
}
