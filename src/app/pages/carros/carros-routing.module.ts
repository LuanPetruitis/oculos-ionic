import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { novoCarroPage } from './novoCarro/novoCarro.page';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'cadastro',
        component: novoCarroPage
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    novoCarroPage
  ]
})
export class CarrosRoutingModule { }
