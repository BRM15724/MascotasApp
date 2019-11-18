import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LamparaPage } from './lampara.page';

const routes: Routes = [
  {
    path: '',
    component: LamparaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LamparaPageRoutingModule {}
