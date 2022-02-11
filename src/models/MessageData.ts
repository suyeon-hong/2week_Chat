import { User } from '@types';

export interface IMessageData {
  chatId: string;
  profileImage: string | undefined;
  content: string;
  date: string | Date;
  user: User;
}
