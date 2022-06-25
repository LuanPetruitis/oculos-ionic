import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { novoOculoPage } from './novo-oculoss.page';

const routes: Routes = [
  {
    path: '',
    component: novoOculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class novoOculoPageRoutingModule {}
