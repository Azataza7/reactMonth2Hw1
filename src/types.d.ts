export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  userLevel: string;
}

export interface UserMutation {
  name: string;
  email: string;
  isActive: boolean;
  userLevel: string;
}