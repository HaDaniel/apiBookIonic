import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { SubscribePage } from '../subscribe/subscribe';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  logindata: any ={};
  logError: any;
  dataObject;
  SubscribePageroot: any = SubscribePage;
  constructor(
    public navCtrl: NavController,
    public http: Http,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    this.storage.get('token').then((token) => {
    console.log('token tabs storage : ' + token);
      if(token != null){
        this.navCtrl.setRoot(TabsPage, {  });
      }
    });
  }



  performLogin(logindata){
  console.log("logindata",logindata);
    var body = JSON.stringify({
      'name': logindata.name,
      'password': logindata.password
    });

    console.log("body", body);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http
      .post('http://localhost:4000/api/authenticate', body, { headers: headers })
      .map(response => response.json())
      .subscribe(
        response => {
        console.log(response.success);
          this.dataObject = response;
          if(response.success == true){
            this.storage.set('token', response.token).then((token) => {
              console.log('token set storage : ' + token);
            });
            this.storage.set('userId', response.userId)
              console.log('Authentication Complete')
              this.navCtrl.setRoot(TabsPage, {  });
          };
          console.log(response);
        },
        this.logError,
        () => {}
      );
    }

  subscribe() {

      this.navCtrl.setRoot(SubscribePage, {  });
  }
}
