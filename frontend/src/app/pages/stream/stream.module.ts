import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreamPageRoutingModule } from './stream-routing.module';
import { HeaderComponent } from '../../header/header.component';
import { FooterMenuComponent } from '../../footer-menu/footer-menu.component';
import { StreamPage } from './stream.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreamPageRoutingModule
  ],
  declarations: [StreamPage,HeaderComponent,FooterMenuComponent]
})
export class StreamPageModule {}
