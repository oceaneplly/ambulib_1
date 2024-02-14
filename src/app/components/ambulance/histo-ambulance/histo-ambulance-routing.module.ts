import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoAmbulancePage } from './histo-ambulance.page';

const routes: Routes = [
  {
    path: '',
    component: HistoAmbulancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoAmbulancePageRoutingModule {}
