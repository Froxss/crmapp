import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebaricons',
  templateUrl: './sidebaricons.component.html',
  styleUrls: ['./sidebaricons.component.css'],
})
export class SidebariconsComponent {
  @Output() componentChange = new EventEmitter<string>();
  @Input() selectedComponent: string | null = 'null';

  loadComponent(component: string) {
    this.componentChange.emit(component);
  }
}
