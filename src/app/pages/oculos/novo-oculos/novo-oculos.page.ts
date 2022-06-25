import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AnyRecordWithTtl } from 'dns';
import { Oculoservice } from '../service/oculos-service';

@Component({
  selector: 'app-novo-oculos',
  templateUrl: './novo-oculos.page.html'
  // styleUrls: ['./novoOculo.page.scss'],
})
export class novoOculoPage implements OnInit {
  oculosForm: FormGroup;

  selectedFile: any;
  id: any;
  imageUrl: any;
  criando: any;

  constructor(
    private builder: FormBuilder,
    private nav: NavController,
    private oculo: Oculoservice,
    private actRoute: ActivatedRoute,
    private storage: AngularFireStorage
  ) {
    this.criando = false
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
    this.initForm();
  }

  private initForm() {
    this.oculosForm = this.builder.group({
      nome: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      quilometragem: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    })
  }

  /**
   * Salva a nova oculo no Firebase
   */
  async registraOculo() {
    this.criando = true;
    const oculo = this.oculosForm.value;
    console.log(this.selectedFile)
    
    if (this.id != 'new') {
      oculo.id = this.id
    }

    var resquest_oculo = this.oculo.registraOculo(oculo)
  
    if (this.selectedFile) {
      this.imageUrl = await this.uploadFile(resquest_oculo.id, this.selectedFile)
    }

    this.oculo.update(resquest_oculo.id, {
      imageUrl: this.imageUrl || null
    })

    
    this.criando = true;
    this.nav.navigateForward('home')
  }

  chooseFile (event) {
    this.selectedFile = event.target.files
  }

  async uploadFile(id, file): Promise<any> {
    if(file && file.length) {
      try {
        const task = await this.storage.ref('images').child(id).put(file[0])
        return this.storage.ref(`images/${id}`).getDownloadURL().toPromise();
      } catch (error) {
        console.log(error);
      }
    }
  }

}
