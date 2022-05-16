import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { novoCarroPage } from './novoCarro.page';

const routes: Routes = [
  {
    path: '/new',
    component: novoCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class novoCarroPageRoutingModule {}
