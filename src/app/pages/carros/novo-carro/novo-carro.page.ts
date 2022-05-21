import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AnyRecordWithTtl } from 'dns';
import { Carroservice } from '../service/carro-service';

@Component({
  selector: 'app-novo-carro',
  templateUrl: './novo-carro.page.html'
  // styleUrls: ['./novoCarro.page.scss'],
})
export class novoCarroPage implements OnInit {
  carrosForm: FormGroup;

  selectedFile: any;
  id: any;
  imageUrl: any;
  criando: any;

  constructor(
    private builder: FormBuilder,
    private nav: NavController,
    private carro: Carroservice,
    private actRoute: ActivatedRoute,
    private storage: AngularFireStorage
  ) {
    this.criando = false
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.carro.pegaCarro(this.id).subscribe(res => {
      console.log(res[0])
      if (res[0]){ 
        this.carrosForm.patchValue({
          nome: res[0].nome, 
          marca: res[0].marca,
          descricao: res[0].descricao,
          quilometragem: res[0].quilometragem,
          valor: res[0].valor
        });
        this.imageUrl = res[0].imageUrl
      } else {
        this.carrosForm.patchValue({
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
    this.carrosForm = this.builder.group({
      nome: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      quilometragem: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    })
  }

  /**
   * Salva a nova carro no Firebase
   */
  async registraCarro() {
    this.criando = true;
    const carro = this.carrosForm.value;
    console.log(this.selectedFile)
    
    if (this.id != 'new') {
      carro.id = this.id
    }

    var resquest_carro = this.carro.registraCarro(carro)
  
    if (this.selectedFile) {
      this.imageUrl = await this.uploadFile(resquest_carro.id, this.selectedFile)
    }

    this.carro.update(resquest_carro.id, {
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
