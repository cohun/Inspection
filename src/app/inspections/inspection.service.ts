import { Injectable } from '@angular/core';
import { Inspection } from './inspection.model';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  private inspections: Inspection[] = [
    {id: '1', name: 'Máv', date: '01-04-2019', valid: '02-04-2020'},
    {id: '2', name: 'Strabag', date: '01-05-2019', valid: '02-05-2020'}
  ];

  constructor() { }

  getinspections() {
    return this.inspections.slice();
  }

  setInspection(ne: Inspection) {
    this.inspections.push(ne);
    console.log(`from service ${this.inspections.map(value => value.name)}`);
  }
}
