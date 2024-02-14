import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticulierPage } from './particulier.page';

const routes: Routes = [
  {
    path: '',
    component: ParticulierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticulierPageRoutingModule {}
