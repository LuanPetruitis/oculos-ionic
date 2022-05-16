import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]]
    });
  }

  recoverPass() {
    const data = this.loginForm.value;
    this.service.recoverPass(data.email);
  }

}
