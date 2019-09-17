import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: ['.md-taps {margin-left: 25px;}']
})
export class ProgressComponent implements OnInit {

  percent: number = 20;
  percentOne: number = 60;
  constructor() { }

  ngOnInit() {
  }

  updateZero = (event: number) => {
    console.log(event, 'event');
    
  }

}
