import { Component, OnInit } from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-grafic1',
  templateUrl: './grafic1.component.html',
  styleUrls: ['./grafic1.component.css']
})
export class Grafic1Component implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'No orders'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 52],
    // [50, 150, 120, 36],
    // [250, 130, 70, 69],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
