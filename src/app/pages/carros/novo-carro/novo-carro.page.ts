import { Component, OnInit } from '@angular/core';
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


  constructor(
    private builder: FormBuilder,
    private nav: NavController,
    private carro: Carroservice,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.carrosForm = this.builder.group({
      nome: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      quilometragem: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    })
  }

  /**
   * Salva a nova carro no Firebase
   */
  registraCarro() {
    console.log("=====================")
    console.log(this.carrosForm.value)
    const carro = this.carrosForm.value;
    this.carro.registraCarro(carro)
      .then(() => this.nav.navigateForward('home'));
  }

  // loadImageFromDevice(event) {

  //   const file = event.target.files[0];
  
  //   const reader = new FileReader();
  
  //   reader.readAsArrayBuffer(file);
  
  //   reader.onload = () => {
  
  //     // get the blob of the image:
  //     let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
  
  //     // create blobURL, such that we could use it in an image element:
  //     let blobURL: string = URL.createObjectURL(blob);

  //     console.log(blob)
  //     console.log(blobURL)
  
  //   };
  
  //   reader.onerror = (error) => {
  
  //     //handle errors
  
  //   };
  // };

}
