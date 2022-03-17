import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../header/header.component';
import { FooterMenuComponent } from '../../footer-menu/footer-menu.component';

import { WalletsPageRoutingModule } from './wallets-routing.module';

import { WalletsPage } from './wallets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletsPageRoutingModule
  ],
  declarations: [WalletsPage,HeaderComponent,FooterMenuComponent]
})
export class WalletsPageModule {}
