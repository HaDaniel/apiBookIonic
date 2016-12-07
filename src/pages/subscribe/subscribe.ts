import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage }   from '../login/login';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html'
})
export class SubscribePage {
  formdata: any ={};
  logError: any;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public storage: Storage) {}

  ionViewDidLoad() {
    console.log('Hello SubscribePage Page');
  }

  post(formdata){

  		console.log("formdata post" ,formdata);
      if (formdata.name != null && formdata.password != null){
        var body = JSON.stringify({
          'name': formdata.name,
          'password': formdata.password
        });
        console.log("body post ", body);

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http
          .post('http://localhost:4000/api/create', body, { headers: headers })
          .map(response => response.json())
          .subscribe(
            response => {
            console.log(response);
            this.navCtrl.setRoot(LoginPage, {  });
            },
            this.logError,
            () => {}
          );
      }

  }

  login() {

      this.navCtrl.setRoot(LoginPage, {  });

  }
}
