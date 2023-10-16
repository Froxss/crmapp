import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebariconsComponent } from './sidebaricons.component';
import { MatIconModule } from '@angular/material/icon';
import { SidebariconsRoutingModule } from './sidebaricons-routing.module';

@NgModule({
  declarations: [SidebariconsComponent],
  imports: [CommonModule, MatIconModule, SidebariconsRoutingModule],
  exports: [SidebariconsComponent],
})
export class SidebariconsModule {}
