import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebariconsModule } from '../sidebaricons/sidebaricons.module';

import { NavbarRoutingModule } from './navbar-routing.module';
import { RaporshomeComponent } from '../rapors/raporshome.component';
import { PersonalsComponent } from '../personals/personals.component';
import { CustomersComponent } from '../customers/customers.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { ContractsComponent } from '../contracts/contracts.component';
import { HelpsComponent } from '../helps/helps.component';
import { PaymentsComponent } from '../payments/payments.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CallsComponent } from '../calls/calls.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    NavbarComponent,
    RaporshomeComponent,
    PersonalsComponent,
    CustomersComponent,
    CalendarComponent,
    ContractsComponent,
    HelpsComponent,
    PaymentsComponent,
    DashboardComponent,
    CallsComponent,
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    SidebariconsModule,MatInputModule,MatFormFieldModule,MatPaginatorModule,MatSortModule,MatTableModule
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
