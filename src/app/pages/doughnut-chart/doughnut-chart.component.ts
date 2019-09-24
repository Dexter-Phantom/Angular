import { Component, OnInit, Input } from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styles: []
})
export class DoughnutChartComponent implements OnInit {

  @Input() title: string[] = [];
  @Input('data') doughnutChartData: number[] = [];
  @Input('typeChar') doughnutChartType: string = '';
  @Input('label') doughnutChartLabels: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
