import { Component } from '@angular/core';

import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

import { LoginPage }   from '../login/login';
import { BooksPage }   from '../books/books';
import { BookscodePage }   from '../bookscode/bookscode';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BooksPage;
  tab2Root: any = BookscodePage;

  constructor(
    public navCtrl: NavController,
    public storage: Storage) {}
  /*isToken: boolean = false;

  ionViewDidLoad() {
    this.storage.get('token').then((token) => {
      console.log('token tabs storage : ' + token);
      this.isToken = true;
    });
  }
*/

  logout(){
    this.storage.get('token').then((token) => {
      console.log('logout token  : ' + token);
    });
    this.storage.remove('token');
    this.storage.remove('userId');
    this.storage.get('token').then((token) => {
      console.log('after remove token  : ' + token);
    });
    console.log('logout');
    this.navCtrl.setRoot(LoginPage, {  });

  }
}
