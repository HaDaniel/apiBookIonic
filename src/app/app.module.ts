
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { BooksPage } from '../pages/books/books';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { BookscodePage } from '../pages/bookscode/bookscode';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    BooksPage,
    SubscribePage,
    BookscodePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    BooksPage,
    SubscribePage,
    BookscodePage
  ],
  providers: [ Storage, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
