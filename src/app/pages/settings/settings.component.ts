import { SettingsService } from '../../services/service.index';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( @Inject(DOCUMENT) private _document, public _services: SettingsService ) { }

  ngOnInit() {
    this.putOnCheck();
  }

  changeColor = (color: string, link: any) => {
    const url = `assets/css/colors/${color}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.applyCheck(link);
    this._services.settings.theme = color;
    this._services.settings.themeUrl = url;
    this._services.saveSettings();
  }

  applyCheck = (link: any) => {
    const selectores = this._document.getElementsByClassName('selector');
    for (const ref of selectores) { ref.classList.remove('working'); }
    link.classList.add('working');
  }

  putOnCheck = () => {
    const selectores = this._document.getElementsByClassName('selector');
    // tslint:disable-next-line:prefer-const
    let theme = this._services.settings.theme;
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
     }
  }

}
