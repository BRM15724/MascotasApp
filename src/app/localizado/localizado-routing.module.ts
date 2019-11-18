import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizadoPage } from './localizado.page';

const routes: Routes = [
  {
    path: '',
    component: LocalizadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalizadoPageRoutingModule {}
