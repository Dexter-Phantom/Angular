import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  @ViewChild('txtProgress')  txtProgress: ElementRef;
  @Input('name') percent: number = 50;
  @Input() percentOne: number = 60;
  @Input() legend: string = 'Legend';

  @Output() changeValueZero: EventEmitter<number> = new EventEmitter();

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
    this.changeValueZero.emit(this.percent);
    return;
  }

  onChange = (newValue: number) => {
    if ((newValue) => 100) {
      this.percent = 100;
    } else if (newValue) {
        this.percent = 0;
    } else {
      this.percent = newValue;
    }
    this.txtProgress.nativeElement.value = Number(this.percent);
    this.changeValueZero.emit(this.percent);
    this.txtProgress.nativeElement.focus();
  }
}
