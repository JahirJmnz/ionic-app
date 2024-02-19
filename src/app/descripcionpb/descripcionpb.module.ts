import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionpbPageRoutingModule } from './descripcionpb-routing.module';

import { DescripcionpbPage } from './descripcionpb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionpbPageRoutingModule
  ],
  declarations: [DescripcionpbPage]
})
export class DescripcionpbPageModule {}
