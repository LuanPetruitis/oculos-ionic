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

  selectedFile: any;
  id: any;
  imageUrl: any;
  criando: any;
  nome: any;
  descricao: any;
  modelo: any;
  condicao: any;
  materias: any;
  
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
        this.nome = res[0].nome,
        this.descricao = res[0].descricao, 
        this.modelo = res[0].modelo, 
        this.condicao = res[0].condicao, 
        this.materias = res[0].materias,
        this.imageUrl = res[0].imageUrl
      } else {
        this.nome = ''
        this.descricao = ''
        this.modelo = ''
        this.condicao = ''
        this.materias = []
        this.imageUrl = ''
      }
    })
   }

  ngOnInit() {
  }

}
