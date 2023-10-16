import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  selectedComponent: string | null = 'null';
  sideBarList = [
    'Ana Sayfa',
    'Raporlar',
    'Müşteriler',
    'Sözleşmeler',
    'Görüşmeler',
    'Personel',
    'Takvim',
    'Tahsilatlar',
    'Destek',
  ];
  loadComponent(componentName: string) {
    this.selectedComponent = componentName;
  }

  ngOnInit() {
    this.selectedComponent = 'Ana Sayfa';
  }
}
