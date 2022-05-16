import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;


  constructor( 
    private builder: FormBuilder,
    private nav: NavController,
    private service: LoginService
    ) {
    
  }

  ngOnInit() {
    this.isUserLoggedIn();

    this.loginForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  isUserLoggedIn() {
    this.service.isLoggedIn.subscribe(user => {
      if (user) {
        this.nav.navigateForward('home');
      }
    })
  }

  private async login() {
    const user = this.loginForm.value;

    this.service.login(user);
  }

}
