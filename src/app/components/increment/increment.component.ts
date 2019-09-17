import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  percent: number = 50;
  legend: string = 'Legend';
  constructor() { }

  ngOnInit() {
  }

  changeValue = (valor) => {
    if (this.percent >= 100 && valor > 0) {
       this.percent = 100;
       return;
    }
    if (this.percent <= 0 && valor < 0) {
      this.percent = 0;
      return;
    }

    this.percent = this.percent + valor;
    return;
  }
}
