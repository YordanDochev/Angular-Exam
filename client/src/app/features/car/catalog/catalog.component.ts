import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogPageComponent implements OnInit{
  constructor(private http:HttpClient,private carService:CarService){}

  ngOnInit(): void {
    
  }

}
