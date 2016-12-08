import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {BooksService} from '../../providers/books-service';
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

/*
  ionViewDidLoad() {

    this.storage.get('token').then((token) => {

      this.storage.get('userId').then((userId) => {
        var userId = userId;

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', token);

        if(token != null){

          this.http
            .get('http://localhost:4000/api/users/' + userId, { headers: headers })
            .map(response => response.json())
            .subscribe(
                response => {
                  console.log(response.read[0]);
                  this.booksRead = response.read;
                  this.booksUnRead = response.unread;
                }
            );

        }

      });

    });
  }*/

}
