import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Books page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-books',
  templateUrl: 'books.html'
})
export class BooksPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BooksPage Page');
  }

}
