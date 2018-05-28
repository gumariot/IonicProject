import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListHiking } from '../pages/hiking-list/hiking-list';
import { HikeDetailPage } from '../pages/hike-detail/hike-detail';
import { HikeActivePage } from '../pages/hiking-active/hiking-active';

import { CurrentHiking } from '../Service/CurrentHiking';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListHiking,
    HikeDetailPage,
    HikeActivePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListHiking,
    HikeDetailPage,
    HikeActivePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CurrentHiking,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
