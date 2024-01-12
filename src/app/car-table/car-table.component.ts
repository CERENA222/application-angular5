import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {
  cars: Car[];
  selectedCar: Car = { id: -1, marque: '', modele: '' };

  constructor(private carService: CarService) {
    this.cars =[]
    
    
  }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
    this.selectedCar = this.cars[0]; // Défaut: afficher la première voiture
  }

  showCarDetails(car: Car): void {
    this.selectedCar = car;
  }
}
