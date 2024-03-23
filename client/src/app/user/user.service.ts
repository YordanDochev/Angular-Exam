import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { tap } from 'rxjs';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(
    username: string,
    email: string,
    phoneNumber: string,
    password: string,
    rePassword: string
  ) {
    const { apiUrl } = environment;
    console.log({
      username,
      email,
      phoneNumber,
      password,
      rePassword,
    });
        
    return this.http
      .post<UserForAuth>(`${apiUrl}/register`, {
        username,
        email,
        phoneNumber,
        password,
        rePassword,
      })
      .subscribe((data) => console.log(data));
  }
}
