import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionpbPage } from './descripcionpb.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionpbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionpbPageRoutingModule {}
