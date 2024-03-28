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
  price: string;
  _id: string;
  subscribers: string[];
  posts: string[];
  userId: AuthUser;
  created_at: string;
  updatedAt: string;
  __v: number;
}

export interface CarEditValue {
  postName: string | undefined;
  carBrand: string | undefined;
  type: string | undefined;
  image1: string | undefined;
  image2: string | undefined;
  image3: string | undefined;
  image4: string | undefined;
  engineSize: number | undefined;
  power: number | undefined;
  gearbox: string | undefined;
  year: number | undefined;
  fuel: string | undefined;
  mileage: number | undefined;
  description: string | undefined;
  color: string | undefined;
  price: string | undefined;
}
