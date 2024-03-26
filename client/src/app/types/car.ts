import { User } from './user';

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
  year: number,
  fuel: string;
  mileage: number;
  description: string;
  color: string;
  price: string;
  _id: string;
  subscribers: string[];
  posts: string[];
  userId:User,
  created_at: string
  updatedAt: string
  __v: number
}

