import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadocuentaPage } from './estadocuenta.page';

const routes: Routes = [
  {
    path: '',
    component: EstadocuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadocuentaPageRoutingModule {}
