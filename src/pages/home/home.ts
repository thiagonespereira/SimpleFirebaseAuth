import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private auth: AuthService) {

  }

  login() {
    this.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  logout() {
    this.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }
}
