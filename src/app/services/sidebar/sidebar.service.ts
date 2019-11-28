import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Main',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard'},
        { title: 'Doughnut', url: '/doughnut'},
        { title: 'Progressbar', url: '/progress'},
        { title: 'Account settings', url: '/account-settings'},
      ]
    }
  ];

  constructor() { }
}
