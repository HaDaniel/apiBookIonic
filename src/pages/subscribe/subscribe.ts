import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Subscribe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html'
})
export class SubscribePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SubscribePage Page');
  }

}
