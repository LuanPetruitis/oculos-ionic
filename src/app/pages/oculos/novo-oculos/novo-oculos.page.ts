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
  checkedItems = [];


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
          descricao: res[0].descricao, 
          modelo: res[0].modelo, 
          condicao: res[0].condicao, 
          material_celulose: res[0].material_celulose,
          material_metal: res[0].material_metal,
          material_titanium: res[0].material_titanium,
          material_aluminio: res[0].material_aluminio, 
          material_aco: res[0].material_aco, 
          material_madeira: res[0].material_madeira, 
          material_injetados: res[0].material_injetados, 
          material_outro: res[0].material_outro, 
        });
        this.imageUrl = res[0].imageUrl
      } else {
        this.oculosForm.patchValue({
          nome: '',
          descricao: '',
          modelo: '',
          condicao: '',
          material_celulose: false,
          material_metal: false,
          material_titanium: false,
          material_aluminio: false,
          material_aco: false,
          material_madeira: false,
          material_injetados: false,
          material_outro: false,
        });
        this.imageUrl = ''
      }
    })
  }

  ngOnInit() {
    this.initForm();
    this.oculosForm.setErrors({ required: true });
  }

  private initForm() {
    this.oculosForm = this.builder.group({
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      condicao: ['', [Validators.required]],
      material_celulose: [false],
      material_metal: [false],
      material_titanium: [false],
      material_aluminio: [false],
      material_aco: [false],
      material_madeira: [false],
      material_injetados: [false],
      material_outro: [false],
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

    oculo.materias = this.checkedItems
    var resquest_oculo = this.oculo.registraOculo(oculo)
  
    console.log(this.selectedFile)
    if (this.selectedFile) {
      console.log("===============================")
      this.imageUrl = await this.uploadFile(resquest_oculo.id, this.selectedFile)
    }
    
    console.log(this.imageUrl)
    this.oculo.update(resquest_oculo.id, {
      imageUrl: this.imageUrl || null
    })

    
    this.criando = false;
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

  changeSelection(item) {
    if (this.checkedItems.includes(item)) {
      this.checkedItems = this.checkedItems.filter((value) => value != item);
    } else {
      this.checkedItems.push(item);
    }
  }
}
