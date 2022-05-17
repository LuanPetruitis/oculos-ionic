import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { novoCarroPage } from './novo-carro.page';

const routes: Routes = [
  {
    path: '',
    component: novoCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class novoCarroPageRoutingModule {}
