import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPageRoutingModule } from './activity-routing.module';

import { ActivityPage } from './activity.page';
import { HeaderComponent } from '../../header/header.component';
import { FooterMenuComponent } from '../../footer-menu/footer-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityPageRoutingModule
  ],
  declarations: [ActivityPage,HeaderComponent,FooterMenuComponent]
})
export class ActivityPageModule {}
