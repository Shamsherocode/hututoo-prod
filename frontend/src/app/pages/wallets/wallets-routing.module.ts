import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletsPage } from './wallets.page';

const routes: Routes = [
  {
    path: '',
    component: WalletsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletsPageRoutingModule {}
