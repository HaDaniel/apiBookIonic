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

  public isBookexiste: any;
  public isbnData: any;
  public newBookData: any;

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
        this.isBookexiste = data;
        if(this.isBookexiste.success == false)
        {
          this.barcodeService.getBookISBN().then(data => {
              // console.log('  data isbn ' ,  data);
              this.isbnData = data;
              console.log('  data isbn ' ,  this.isbnData.data[0]);
              // console.log('  data isbn ' ,  this.isbnData.author_data);
             var body = JSON.stringify({
                'titre': this.isbnData.data[0].title,
                'auteur': this.isbnData.data[0].author_data[0].name,
                'description': this.isbnData.data[0].publisher_text,
                'isbn': this.isbnData.data[0].isbn13
              });
              this.booksService.postBook(body).then(data => {
                    this.newBookData = data;
                    console.log('  Books Insert' ,   data);
                    console.log('  this.newBookData._id' ,   this.newBookData._id);
                    this.booksService.userreadBook(this.newBookData._id).then(data => {
                          console.log('  Books read' ,   data);
                    }).catch(err => {
                      console.log('Error loading books 0');
                    });
              }).catch(err => {
                console.log('Error loading books 1');
              });

          }).catch(err => {
            console.log('Error get  books2');
          });
        }
    }).catch(err => {
      console.log('Error get  books3');
    });
    /*this.barcodeService.getBookISBN().then(data => {
        console.log('  data isbn ' ,  data);
    }).catch(err => {
      console.log('Error get  books');
    });*/

  }

  scan() {

    this.storage.get('token').then((token) => {

      this.storage.get('userId').then((userId) => {
        var userId = userId;

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', token);
        var body = JSON.stringify({
          'bookid': '5849650570c6f62439293722'
        });

        if(token != null){
            this.http
              .put('https://apibook.herokuapp.com/api/userbook/read', body , { headers: headers })
              .map(response => response.json())
              .subscribe(
                  response => {
                    console.log(response);
                  }
              );

        }

      });

    });
/*
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
*/
  }
}
