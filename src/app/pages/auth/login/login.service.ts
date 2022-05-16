import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: Observable<firebase.User>;

  constructor(
    private nav: NavController,
    private auth: AngularFireAuth,
    private toast: ToastController,
  ) {
    this.isLoggedIn = auth.authState;
    ('');
   }

  login(user) {
    this.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(() => this.nav.navigateForward('home'))
      .catch(() => this.showError());
  }

  private async showError() {
    const ctrl  = await this.toast.create({
      message: "Dados de acesso incorretos.",
      duration: 3000
    });

    ctrl.present();
  }

  createUser(user) {
    this.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((credentials) => {
        console.log(credentials);
      })
      .catch((error) => {
        console.log('Erro:', error.message);
      });
  }

  recoverPass(email) {
    console.log(email)
    this.auth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.nav.navigateBack('auth');
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  logOut() {
    console.log("Teste")
    this.auth.signOut().then(() => {
      this.nav.navigateForward('auth');
    });
  }
}
