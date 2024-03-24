import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthUser } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<AuthUser | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: AuthUser | undefined;

  
  
  constructor(private http: HttpClient) {
    this.user$.subscribe((data) => {
      this.user = data;
    });
    console.log(this.user);
  }

  register(
    username: string,
    email: string,
    tel: string,
    password: string,
    rePassword: string
  ) {
    return this.http
      .post<AuthUser>('/api/register', {
        username,
        email,
        tel,
        password,
        rePassword,
      })
      .pipe(tap((data) => this.user$$.next(data)));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthUser>('/api/login', { email, password })
      .pipe(tap((data) => this.user$$.next(data)));
  }
}
