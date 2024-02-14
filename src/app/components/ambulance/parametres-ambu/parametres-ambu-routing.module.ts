import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametresAmbuPage } from './parametres-ambu.page';

const routes: Routes = [
  {
    path: '',
    component: ParametresAmbuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametresAmbuPageRoutingModule {}
