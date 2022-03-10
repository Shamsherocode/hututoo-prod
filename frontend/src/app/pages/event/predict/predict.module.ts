import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredictPageRoutingModule } from './predict-routing.module';

import { PredictPage } from './predict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredictPageRoutingModule
  ],
  declarations: [PredictPage]
})
export class PredictPageModule {}
