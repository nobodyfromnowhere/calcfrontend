import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  station$: Object;
  good$: Object;
  car$: Object;
  depStation: string;
  destStation: string;
  typeOfGood: string;
  typeOfCar: string;
  weight: string;
  calculate: number;
  hostname: string=window.location.host;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getStation().subscribe(
      dataService => this.station$ = dataService
    )
    this.dataService.getGood().subscribe(
      dataService => this.good$ = dataService
    )
    this.dataService.getTypeOfCar().subscribe(
      dataService => this.car$ = dataService
    )
  }
  
  Calculate() {
    this.calculate = 100;
  }
  
  Reset() {
    this.depStation = '';
    this.destStation = '';
    this.typeOfGood = '';
    this.typeOfCar = '';
    this.weight = '';
    this.calculate = 0;
  }
  IfSelect() {
  }
}
