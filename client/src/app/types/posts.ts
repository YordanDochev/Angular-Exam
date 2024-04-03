import { AuthUser } from "./user";

export interface Post {
  _id: string;
  postText: string;
  userId: AuthUser;
  carId: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}
