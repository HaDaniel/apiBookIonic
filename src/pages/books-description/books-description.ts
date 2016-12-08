import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the BooksDescription page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-books-description',
  templateUrl: 'books-description.html'
})
export class BooksDescriptionPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BooksDescriptionPage Page');
  }

}
