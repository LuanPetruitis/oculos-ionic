import { Component } from '@angular/core';
// import { NavController } from '@ionic/angular/providers/nav-controller';
import { LoginService } from '../auth/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaCarros = 10;

  constructor(
    private service: LoginService
  ) {}

  logOut() {
    this.service.logOut()
  }

}
