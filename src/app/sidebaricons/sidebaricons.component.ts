import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebaricons',
  templateUrl: './sidebaricons.component.html',
  styleUrls: ['./sidebaricons.component.css'],
})
export class SidebariconsComponent {
  sideBarList = [
    {
      id: 'Ana Sayfa',
      link: 'dashboard',
      icon: 'home',
    },
    {
      id: 'Raporlar',
      link: 'rapors',
      icon: 'list',
    },
    {
      id: 'Müşteriler',
      link: 'customers',
      icon: 'diamond',
    },
    {
      id: 'Sözleşmeler',
      link: 'contracts',
      icon: 'thumb_up',
    },
    {
      id: 'Görüşmeler',
      link: 'calls',
      icon: 'phone_callback',
    },
    {
      id: 'Personel',
      link: 'personals',
      icon: 'group',
    },
    {
      id: 'Takvim',
      link: 'calendar',
      icon: 'calendar_month',
    },
    {
      id: 'Tahsilatlar',
      link: 'payments',
      icon: 'done_all',
    },
    {
      id: 'Destek',
      link: 'helps',
      icon: 'contact_support',
    },
  ];
  @Output() componentChange = new EventEmitter<string>();
  @Input() selectedComponent: string | null = 'null';

  loadComponent(component: string) {
    this.componentChange.emit(component);
  }
}
