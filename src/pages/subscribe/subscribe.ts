import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage }   from '../login/login';


@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html'
})
export class SubscribePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SubscribePage Page');
  }

  login() {

      this.navCtrl.setRoot(LoginPage, {  });

  }
}
