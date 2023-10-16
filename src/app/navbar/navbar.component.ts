import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  selectedComponent: string | null = 'null';
  sideBarList = [
    {
      id: 'Ana Sayfa',
      link: 'dashboard',
    },
    {
      id: 'Raporlar',
      link: 'rapors',
    },
    {
      id: 'Müşteriler',
      link: 'customers',
    },
    {
      id: 'Sözleşmeler',
      link: 'contracts',
    },
    {
      id: 'Görüşmeler',
      link: 'calls',
    },
    {
      id: 'Personel',
      link: 'personals',
    },
    {
      id: 'Takvim',
      link: 'calendar',
    },
    {
      id: 'Tahsilatlar',
      link: 'payments',
    },
    {
      id: 'Destek',
      link: 'helps',
    },
  ];
  loadComponent(componentName: string) {
    this.selectedComponent = componentName;
  }

  ngOnInit() {
    this.selectedComponent = 'Ana Sayfa';
  }
}
