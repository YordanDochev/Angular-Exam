import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Car } from 'src/app/types/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private car$$ = new BehaviorSubject<Car | undefined>(undefined);
  public car$ = this.car$$.asObservable();

  car: Car | undefined;

  constructor(private http: HttpClient) {
    this.car$.subscribe((data) => {
      this.car = data;
    });
  }

  getAllCars(){
    return this.http.get<Car[]>('/api/cars').pipe(tap(([data])=>this.car$$.next(data)))
    
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
    price: string
  ) {
    return this.http.post<Car>('/api/cars', {
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
    }).pipe(tap((data)=> this.car$$.next(data)));
  }
}
