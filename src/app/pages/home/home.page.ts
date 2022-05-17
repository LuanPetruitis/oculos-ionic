import { Component } from '@angular/core';
// import { NavController } from '@ionic/angular/providers/nav-controller';
import { LoginService } from '../auth/login/login.service';
import { Carroservice } from '../carros/service/carro-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaCarros;

  constructor(
    private service: LoginService,
    private carro: Carroservice
  ) {}

  
  ngOnInit() {
    this.carro.lista().subscribe((x) => (this.listaCarros = x));
  }
  
  logOut() {
    this.service.logOut()
  }

  remove(carro) {
    this.carro.remove(carro);
  }
}
