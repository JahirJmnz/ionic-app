import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadocuentaPageRoutingModule } from './estadocuenta-routing.module';

import { EstadocuentaPage } from './estadocuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadocuentaPageRoutingModule
  ],
  declarations: [EstadocuentaPage]
})
export class EstadocuentaPageModule {}
