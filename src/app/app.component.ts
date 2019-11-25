import { Component } from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DexterPH';
  // tslint:disable-next-line: variable-name
  constructor(public _settings: SettingsService) {
    this._settings.loadSettings();
   }
}
