import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BooksPage } from '../books/books';
import { NavParams } from 'ionic-angular';


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

  book: any;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.book = navParams.get('book');
  }

  ionViewDidLoad() {
    console.log('Hello BooksDescriptionPage Page');
    console.log('book descp',this.book);
  }

}
