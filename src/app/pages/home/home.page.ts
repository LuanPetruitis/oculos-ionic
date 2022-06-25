import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { NavController } from '@ionic/angular/providers/nav-controller';
import { Oculoservice } from '../oculos/service/oculos-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaOculos;
  
  constructor(
    private oculo: Oculoservice,
    private storage: AngularFireStorage
  ) {}
    
    
  ngOnInit() {
    this.oculo.lista().subscribe((x) => (this.listaOculos = x));
  }

  remove(oculo) {
    console.log(oculo)
    if(oculo.imageUrl) {
      this.storage.refFromURL(oculo.imageUrl).delete()
    }
    console.log(oculo)
    console.log(typeof oculo.id)
    this.oculo.remove(oculo);
  }
}
