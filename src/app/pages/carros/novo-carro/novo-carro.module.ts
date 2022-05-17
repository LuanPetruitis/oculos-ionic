import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { novoCarroPageRoutingModule } from './novo-carro-routing.module';

import { novoCarroPage } from './novo-carro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    novoCarroPageRoutingModule
  ],
  declarations: [novoCarroPage]
})
export class novoCarroPageModule {}
