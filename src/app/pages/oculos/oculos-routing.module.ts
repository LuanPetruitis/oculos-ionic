import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { novoOculoPage } from './novo-oculos/novo-oculos.page';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'cadastro/:id',
        component: novoOculoPage
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
    novoOculoPage
  ]
})
export class OculosRoutingModule { }
