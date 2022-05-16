import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { novoCarroPageRoutingModule } from './novoCarro-routing.module';

import { novoCarroPage } from './novoCarro.page';

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
