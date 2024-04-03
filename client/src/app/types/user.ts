import { Car } from './car';

export interface AuthUser {
  cars: string[];
  subscribes: string[];
  _id: string;
  email: string;
  username: string;
  created_at: string;
  tel: string;
  updatedAt: string;
}

export interface UserCars {
  cars: Car[];
  subscribes: Car[];
  _id: string;
  username: string;
  created_at: string;
}


