
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';

@Injectable()
export class BarcodeService {

  user: any;
  codeISBN: any;

  constructor(
    public http: Http,
    public storage: Storage) {
    console.log('Hello BarcodeService Provider');
  }

  getBookISBN() {
    return new Promise(resolve => {

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Accept', 'application/json');
      headers.append('Access-Control-Allow-Methods', '*');

      this.codeISBN ='9780278471573';
        this.http
          .get('http://isbndb.com/api/v2/json/PQVD82AF/book/' + this.codeISBN,{ headers: headers } )
          .map(response => response.json())
          .subscribe(
              response => {
                  console.log('result isbn Provider', response);
                  resolve(response);
              }
          );
      });
  }
}
