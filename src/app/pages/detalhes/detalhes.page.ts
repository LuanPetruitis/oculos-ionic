import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Oculoservice } from '../oculos/service/oculos-service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  oculosForm: FormGroup;

  selectedFile: any;
  id: any;
  imageUrl: any;
  criando: any;

  constructor(
    // private builder: FormBuilder,
    private nav: NavController,
    private oculo: Oculoservice,
    private actRoute: ActivatedRoute,
    private storage: AngularFireStorage
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.oculo.pegaOculo(this.id).subscribe(res => {
      console.log(res[0])
      if (res[0]){ 
        this.oculosForm.patchValue({
          nome: res[0].nome, 
          marca: res[0].marca,
          descricao: res[0].descricao,
          quilometragem: res[0].quilometragem,
          valor: res[0].valor
        });
        this.imageUrl = res[0].imageUrl
      } else {
        this.oculosForm.patchValue({
          nome: '', 
          marca: '',
          descricao: '',
          quilometragem: 0,
          valor: 0
        });
        this.imageUrl = ''
      }
    })
   }

  ngOnInit() {
  }

}
