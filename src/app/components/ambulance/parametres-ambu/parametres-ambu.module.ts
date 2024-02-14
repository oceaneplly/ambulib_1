import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametresAmbuPageRoutingModule } from './parametres-ambu-routing.module';

import { ParametresAmbuPage } from './parametres-ambu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametresAmbuPageRoutingModule
  ],
  declarations: [ParametresAmbuPage]
})
export class ParametresAmbuPageModule {}
