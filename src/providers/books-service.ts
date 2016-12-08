import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';

@Injectable()
export class BooksService {

  user: any;

  constructor(
    public http: Http,
    public storage: Storage) {
    console.log('Hello BooksService Provider');
  }
  ifBookExist(isbn) {
    return new Promise(resolve => {
      this.storage.get('token').then((token) => {
          var headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('x-access-token', token);
          //Send request
          this.http
            .get('http://localhost:4000/api/books/isbn/' + isbn, { headers: headers })
            .map(response => response.json())
            .subscribe(
                response => {
                    console.log('result book exist Provider', response);
                    resolve(response);
                }
            );

      });
    });
  }

  getUserBook() {
    return new Promise(resolve => {
      this.storage.get('token').then((token) => {
        this.storage.get('userId').then((userId) => {
          var headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('x-access-token', token);
          //Send request
          this.http
            .get('http://localhost:4000/api/users/' + userId, { headers: headers })
            .map(response => response.json())
            .subscribe(
                response => {
                    this.user = response;
                    console.log('result user Provider', response);
                    resolve(this.user);
                }
            );
        });

      });
    });
  }
}
