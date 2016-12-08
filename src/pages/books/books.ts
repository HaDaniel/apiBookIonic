import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {BooksService} from '../../providers/books-service';
import {BooksDescriptionPage} from '../books-description/books-description';

/*
  Generated class for the Books page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
  providers: [BooksService]
})
export class BooksPage {

  logError: any;
  message: string;
  error: string;
  booksRead: any;
  booksUnRead: any;
  user: any;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public storage: Storage,
    public booksService: BooksService
  ) {}



  ionViewDidLoad(){
      this.booksService.getUserBook().then(data => {
          this.user = data;
          this.booksRead = this.user.read;
            console.log('  this.booksRead' ,   this.booksRead);
          this.booksUnRead = this.user.unread;
      }).catch(err => {
        console.log('Error loading books');
      });
  }

  read(event, book){
      this.navCtrl.setRoot(BooksDescriptionPage, { book: book });
  }


}
