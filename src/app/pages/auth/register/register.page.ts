import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loginForm: FormGroup;


  constructor( 
    private builder: FormBuilder,
    private auth: AngularFireAuth,
    private service: LoginService
    ) {
    
  }

  ngOnInit() {
    this.loginForm = this.builder.group({
      nome: ['', [Validators.minLength(2), Validators.maxLength(19), Validators.required]],
      snome: ['', [Validators.minLength(2), Validators.maxLength(19), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_pass: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  createUser() {
    const user = this.loginForm.value;
    this.service.createUser(user);
  }
}
