
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLocPage } from './modal-loc.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLocPageRoutingModule {}

