import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { Car } from 'src/app/types/car';

@Injectable({
  providedIn: 'root',
})
export class CarService implements OnDestroy {
  private car$$ = new BehaviorSubject<Car | undefined>(undefined);
  public car$ = this.car$$.asObservable();

  car: Car | undefined;
  carSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.carSubscription = this.car$.subscribe((data) => {
      this.car = data;
    });
  }

  getAllCars() {
    return this.http
      .get<Car[]>('/api/cars')
      .pipe(tap(([data]) => this.car$$.next(data)));
  }

  getCar(id: string) {
    return this.http
      .get<Car>(`/api/cars/${id}`)
      .pipe(tap((data) => this.car$$.next(data)));
  }

  getLatesCars() {
    return this.http
      .get<Car[]>('/api/cars/lates')
      .pipe(tap(([data]) => this.car$$.next(data)));
  }

  getSearchCars(
    model: string,
    type: string,
    priceFrom: number,
    priceTo: number
  ) {
    return this.http.post<Car[]>('/api/cars/search', {
      model,
      type,
      priceFrom,
      priceTo,
    });
  }

  createEntry(
    postName: string,
    carBrand: string,
    type: string,
    images: {},
    engineSize: number,
    power: number,
    year: number,
    gearbox: string,
    fuel: string,
    mileage: number,
    description: string,
    color: string,
    price: number
  ) {
    return this.http
      .post<Car>('/api/cars', {
        postName,
        carBrand,
        type,
        images,
        engineSize,
        power,
        year,
        gearbox,
        fuel,
        mileage,
        description,
        color,
        price,
      })
      .pipe(tap((data) => this.car$$.next(data)));
  }

  editEntry(
    id: string,
    postName: string,
    carBrand: string,
    type: string,
    images: {},
    engineSize: number,
    power: number,
    year: number,
    gearbox: string,
    fuel: string,
    mileage: number,
    description: string,
    color: string,
    price: number
  ) {
    return this.http
      .put<Car>(`/api/cars/edit/${id}`, {
        postName,
        carBrand,
        type,
        images,
        engineSize,
        power,
        year,
        gearbox,
        fuel,
        mileage,
        description,
        color,
        price,
      })
      .pipe(tap((data) => this.car$$.next(data)));
  }

  deleteEntry(id: string) {
    return this.http
      .delete<Car>(`/api/cars/delete/${id}`)
      .pipe(tap((data) => this.car$$.next(data)));
  }

  subscribeEntry(carId: string) {

    return this.http
      .put<Car>('/api/cars/subscribe', { carId })
      .pipe(tap((data) => this.car$$.next(data)));
  }

  unSubscribeEntry(carId: string) {

    return this.http
      .put<Car>('/api/cars/unsubscribe', { carId })
      .pipe(tap((data) => this.car$$.next(data)));
  }

  ngOnDestroy(): void {
    this.carSubscription.unsubscribe();
  }
}
