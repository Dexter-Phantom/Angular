import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @Input('name') percent: number = 50;
  @Input() legend: string = 'Legend';

  constructor() {

    console.log('percent', this.percent);
    console.log('legend', this.legend);

  }

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
