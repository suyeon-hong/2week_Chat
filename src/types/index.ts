// @공통 type 정의

export interface User {
  userId: string;
  username: string;
}

export enum KeyCodeType {
  NumpadEnter = 'NumpadEnter',
  Enter = 'Enter',
  ESC = 'Esc',
}

export enum InputEventType {
  insertLineBreak = 'insertLineBreak',
}
