import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: AdviceSettings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  // tslint:disable-next-line:variable-name
  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
   }

  saveSettings = () => {
    localStorage.setItem('settings', JSON.stringify(this.settings));
    console.log(localStorage.getItem('settings'), 'ok');
  }

  loadSettings = () => {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      this.apliedTheme();
    } else {
      console.log('loading values default ...');
    }
  }

  apliedTheme = () => {
    this._document.getElementById('theme').setAttribute('href', this.settings.themeUrl);
  }

}


interface AdviceSettings {
  themeUrl: string;
  theme: string;
}
