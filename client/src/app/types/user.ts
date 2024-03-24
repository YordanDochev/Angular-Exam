export interface AuthUser {
  themes: string[];
  posts: string[];
  _id: string;
  email: string;
  username: string;
  created_at: string;
  tel:string;
  updatedAt: string;
}


export interface User {
  themes: string[];
  posts: string[];
  _id: string;
  tel: string;
  email: string;
  username: string;
  created_at: string;
  updatedAt: string;
}


export interface UserForAuth{
  firstName:string,
  email:string,
  phoneNumber:string,
  password:string,
  id:string
}
