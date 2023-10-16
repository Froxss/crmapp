import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { RaporshomeComponent } from '../rapors/raporshome.component';
import { CustomersComponent } from '../customers/customers.component';
import { CallsComponent } from '../calls/calls.component';
import { ContractsComponent } from '../contracts/contracts.component';
import { HelpsComponent } from '../helps/helps.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { PersonalsComponent } from '../personals/personals.component';
import { PaymentsComponent } from '../payments/payments.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: NavbarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'rapors', component: RaporshomeComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'calls', component: CallsComponent },
      { path: 'contracts', component: ContractsComponent },
      { path: 'helps', component: HelpsComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'personals', component: PersonalsComponent },
      { path: 'payments', component: PaymentsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule {}
