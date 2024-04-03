import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { AuthUser, UserCars } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<AuthUser | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: AuthUser | undefined;
  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((data) => {
      this.user = data;
    });
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

  logout() {
    return this.http
      .post('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  getProfile() {
    return this.http
      .get<AuthUser>('/api/users/profile')
      .pipe(tap((data) => this.user$$.next(data)));
  }

  getMyCars() {
    return this.http.get<UserCars>('/api/users/my-cars');
  }

  getMyCarsSubscribes() {
    return this.http.get<UserCars>('/api/users/my-subscribes');
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
