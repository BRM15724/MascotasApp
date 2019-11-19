import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes , RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { ModalSolPage } from '../modal-sol/modal-sol.page';
import { ModalSolPageModule } from '../modal-sol/modal-sol.module';

@NgModule({
  entryComponents: [
    ModalSolPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSolPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  exports: [
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
