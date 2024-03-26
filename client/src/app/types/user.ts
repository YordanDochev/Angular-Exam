import { Car } from './car';

export interface AuthUser {
  cars: Car;
  posts: string[];
  _id: string;
  email: string;
  username: string;
  created_at: string;
  tel: string;
  updatedAt: string;
}

export interface User {
  cars: Car;
  posts: string[];
  _id: string;
  tel: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}
