import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventPageRoutingModule } from './event-routing.module';

import { EventPage } from './event.page';
import { HeaderComponent } from '../../header/header.component';
import { FooterMenuComponent } from '../../footer-menu/footer-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventPageRoutingModule
  ],
  declarations: [EventPage,HeaderComponent,FooterMenuComponent]
})
export class EventPageModule {}
