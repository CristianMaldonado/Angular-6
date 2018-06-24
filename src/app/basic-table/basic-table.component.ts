import { Component, OnInit, Input } from '@angular/core';

export interface Car {
  vin
  year
  brand
  color
}

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {

  @Input() simple: boolean = false

  constructor() { }

  cols: any[]

  table: Car[]

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ]

    this.table = [
      { vin: '1', year: '2020', brand: 'Algo', color: 'Red' },
      { vin: '2', year: '2021', brand: 'Otro', color: 'Green' }
    ]

  }



}
