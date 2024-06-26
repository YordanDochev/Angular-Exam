import { AuthUser } from './user';

interface Images {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

export interface Car {
  postName: string;
  carBrand: string;
  type: string;
  images: Images;
  engineSize: number;
  power: number;
  gearbox: string;
  year: number;
  fuel: string;
  mileage: number;
  description: string;
  color: string;
  price: number;
  _id: string;
  subscribers: string[];
  posts: string[];
  userId: AuthUser;
  created_at: string;
  updatedAt: string;
  __v: number;
}

export interface CarEditValue {
  postName: string | null;
  carBrand: string | undefined;
  type: string | undefined;
  images: {};
  engineSize: number | undefined;
  power: number | undefined;
  gearbox: string | undefined;
  year: number | undefined;
  fuel: string | undefined;
  mileage: number | undefined;
  description: string | undefined;
  color: string | undefined;
  price: number | undefined;
}
