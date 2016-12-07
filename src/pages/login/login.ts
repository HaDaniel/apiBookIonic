import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  logindata: any ={};
  logError: any;
  public dataObject;
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
        console.log(response.success);
          this.dataObject = response;
          if(response.success == true){
            this.storage.set('token', response.token).then((token) => {
              console.log('token set storage : ' + token);
            });

              console.log('Authentication Complete')
              this.navCtrl.push(ContactPage, {  });
          };
          console.log(response);
        },
        this.logError,
        () => {}
      );


  }
}
