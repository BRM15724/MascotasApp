import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

/*import { ModalSolPageRoutingModule } from './modal-sol-routing.module';*/

import { ModalSolPage } from './modal-sol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    /*ModalSolPageRoutingModule*/
  ],
  declarations: [ModalSolPage],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModalSolPageModule {}
