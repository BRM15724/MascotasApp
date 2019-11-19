import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocalizadoPageRoutingModule } from './localizado-routing.module';

import { LocalizadoPage } from './localizado.page';
import { ModalLocPage } from '../modal-loc/modal-loc.page';
import { ModalLocPageModule } from '../modal-loc/modal-loc.module';

@NgModule({
  entryComponents: [
    ModalLocPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalizadoPageRoutingModule,
    ModalLocPageModule
  ],
  declarations: [LocalizadoPage]
})
export class LocalizadoPageModule {}
