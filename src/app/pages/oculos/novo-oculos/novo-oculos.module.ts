import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { IonicModule } from '@ionic/angular';

import { novoOculoPageRoutingModule } from './novo-oculoss-routing.module';

import { novoOculoPage } from './novo-oculoss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    novoOculoPageRoutingModule,
    AngularFireStorageModule
  ],
  declarations: [novoOculoPage]
})
export class novoOculoPageModule {}
