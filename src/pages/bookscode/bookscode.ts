import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner} from 'ionic-native';

/*
  Generated class for the Bookcode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bookcode',
  templateUrl: 'bookscode.html'
})
export class BookscodePage {

  public isbnData: any;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
  }


  scan() {
    BarcodeScanner.scan().then((barcodeData) => {
      let alert = this.alertCtrl.create({
         title: "Success!",
         subTitle: "",
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

}
