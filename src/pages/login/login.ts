import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  logindata: any ={};
  logError: any;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }
  performLogin(logindata){
		console.log(logindata);

    var body = `name=${logindata.name}&password=${logindata.password}`;
    console.log(body);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http
      .post('http://localhost:4000/api/authenticate', body, { headers: headers })
      .map(response => response.json())
      .subscribe(
        response => {
          this.storage.set('token', response.token)
          console.log(response)
        },
        this.logError,
        () => {
          console.log('Authentication Complete')
          this.storage.get('token')
        }
      );


  }
}
