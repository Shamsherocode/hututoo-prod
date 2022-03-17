import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RewardsPageRoutingModule } from './rewards-routing.module';

import { RewardsPage } from './rewards.page';
import { HeaderComponent } from '../../header/header.component';
import { FooterMenuComponent } from '../../footer-menu/footer-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardsPageRoutingModule
  ],
  declarations: [RewardsPage,HeaderComponent,FooterMenuComponent]
})
export class RewardsPageModule {}
