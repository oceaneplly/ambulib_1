import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionReservationPage } from './gestion-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: GestionReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionReservationPageRoutingModule {}
