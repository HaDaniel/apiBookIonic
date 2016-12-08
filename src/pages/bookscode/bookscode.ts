import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner} from 'ionic-native';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import {BarcodeService} from '../../providers/barcode-service';
import {BooksService} from '../../providers/books-service';

/*
  Generated class for the Bookcode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bookcode',
  templateUrl: 'bookscode.html',
  providers: [BarcodeService,BooksService],
})
export class BookscodePage {

  public isbnData: any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: Http,
    public storage: Storage,
    public barcodeService: BarcodeService,
    public booksService: BooksService) {
  }

  scanISBM(){
    this.booksService.ifBookExist('12').then(data => {
        this.isbnData = data;
        if(this.isbnData.success == false)
        {
          this.barcodeService.getBookISBN().then(data => {
              console.log('  data isbn ' ,  data);
          }).catch(err => {
            console.log('Error get  books');
          });
        }
    }).catch(err => {
      console.log('Error get  books');
    });
    /*this.barcodeService.getBookISBN().then(data => {
        console.log('  data isbn ' ,  data);
    }).catch(err => {
      console.log('Error get  books');
    });*/

  }
  /*scan() {

    this.storage.get('token').then((token) => {

      this.storage.get('userId').then((userId) => {
        var userId = userId;

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', token);
        var body = JSON.stringify({
          'bookid': '58491d6b1a89cb0d838ac6ca'
        });

        if(token != null){

          this.http
            .put('http://localhost:4000/api/userbook/unread', body , { headers: headers })
            .map(response => response.json())
            .subscribe(
                response => {
                  console.log(response);
                }
            );

        }

      });

    });

    BarcodeScanner.scan().then((barcodeData) => {
      let alert = this.alertCtrl.create({
         title: "Success!",
         subTitle: barcodeData,
         buttons: ['close']
      });
      alert.present();
      this.isbnData = barcodeData.text;

    }, (err) => {
      let alert = this.alertCtrl.create({
         title: "Attention!",
         subTitle: "error",
         buttons: ['close']
      });
      alert.present();
    });
  }
*/
}
