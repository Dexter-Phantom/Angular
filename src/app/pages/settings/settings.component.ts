import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document ) { }

  ngOnInit() {
  }

  changeColor = (color: string, link: any) => {
    this._document.getElementById('theme').setAttribute('href', `assets/css/colors/${color}.css`);
    this.applyCheck(link);
  }

  applyCheck = (link: any) => {
    const selectores = this._document.getElementsByClassName('selector');
    for (const ref of selectores) { ref.classList.remove('working'); }
    link.classList.add('working');
  }
}
