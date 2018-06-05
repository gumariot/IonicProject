import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListHiking } from '../pages/hiking-list/hiking-list';
import { HikeDetailPage } from '../pages/hike-detail/hike-detail';
import { HikeActivePage } from '../pages/hiking-active/hiking-active';

import { CurrentHikingService } from '../Service/CurrentHikingService';
import { GeolocationService } from '../Service/GeolocationService';
import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgmCoreModule } from '@agm/core';

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
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBCmpjdOyf6mUVzek9PagEUSlPxqpIzNQI'
    })
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
    GeolocationService,
    CurrentHikingService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
