import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocalizadoPageRoutingModule } from './localizado-routing.module';

import { LocalizadoPage } from './localizado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalizadoPageRoutingModule
  ],
  declarations: [LocalizadoPage]
})
export class LocalizadoPageModule {}
