import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: ['.md-taps {margin-left: 25px;}']
})
export class ProgressComponent implements OnInit {

  percent: number = 20;
  constructor() { }

  ngOnInit() {
  }


}
