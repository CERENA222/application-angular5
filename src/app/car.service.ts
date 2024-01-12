import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: Car[] = [
    { id: 0, marque: 'Toyota', modele: 'Camry' },
    { id: 1, marque: 'Honda', modele: 'Accord' },
    { id: 2, marque: 'Mercedes', modele: 'Benz'}
  ];

  getCars(): Car[] {
    return this.cars;
  }
}
