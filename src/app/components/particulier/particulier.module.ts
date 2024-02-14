import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticulierPageRoutingModule } from './particulier-routing.module';

import { ParticulierPage } from './particulier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticulierPageRoutingModule
  ],
  exports: [
    ParticulierPage
  ],
  declarations: [ParticulierPage]
})
export class ParticulierPageModule {}
