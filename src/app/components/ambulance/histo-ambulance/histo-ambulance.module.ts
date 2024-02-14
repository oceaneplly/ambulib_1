import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoAmbulancePageRoutingModule } from './histo-ambulance-routing.module';

import { HistoAmbulancePage } from './histo-ambulance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoAmbulancePageRoutingModule
  ],
  declarations: [HistoAmbulancePage]
})
export class HistoAmbulancePageModule {}
