// @공통 type 정의

export interface UserData {
  userId: string;
  userName: string;
  chatId: number;
  content: string;
  date: Date;
}
export enum KeyCodeType {
  NumpadEnter = 'NumpadEnter',
  Enter = 'Enter',
  ESC = 'Esc',
}

export enum InputEventType {
  insertLineBreak = 'insertLineBreak',
}
