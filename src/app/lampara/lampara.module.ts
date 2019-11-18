import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LamparaPageRoutingModule } from './lampara-routing.module';

import { LamparaPage } from './lampara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LamparaPageRoutingModule
  ],
  declarations: [LamparaPage]
})
export class LamparaPageModule {}
