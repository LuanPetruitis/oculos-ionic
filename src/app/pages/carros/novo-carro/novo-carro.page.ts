import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Carroservice } from '../service/carro-service';

@Component({
  selector: 'app-novo-carro',
  templateUrl: './novo-carro.page.html'
  // styleUrls: ['./novoCarro.page.scss'],
})
export class novoCarroPage implements OnInit {
  carrosForm: FormGroup;

  selectedFile: any;

  constructor(
    private builder: FormBuilder,
    private nav: NavController,
    private carro: Carroservice,
    private storage: AngularFireStorage
  ) { }

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
    console.log("=====================")
    const carro = this.carrosForm.value;


    var resquest_carro = this.carro.registraCarro(carro)
  
    const imageUrl = await this.uploadFile(resquest_carro.id, this.selectedFile)

    this.carro.update(resquest_carro.id, {
      imageUrl: imageUrl || null
    })

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
