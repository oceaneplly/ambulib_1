import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionReservationPageRoutingModule } from './gestion-reservation-routing.module';

import { GestionReservationPage } from './gestion-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionReservationPageRoutingModule
  ],
  declarations: [GestionReservationPage]
})
export class GestionReservationPageModule {}
