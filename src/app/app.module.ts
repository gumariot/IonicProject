import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { Timer } from '../pages/timer/timer';
import { ListHiking } from '../pages/hiking-list/hiking-list';
import { HikeDetailPage } from '../pages/hike-detail/hike-detail';
import { HikeActivePage } from '../pages/hiking-active/hiking-active';

import { CurrentHikingService } from '../Service/CurrentHikingService';
import { GeolocationService } from '../Service/GeolocationService';
import { TimerService } from '../Service/TimerService';
import { OpenDataService } from '../Service/OpenDataService';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmDirectionModule } from 'agm-direction';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListHiking,
    HikeDetailPage,
    HikeActivePage,
    Timer
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AgmDirectionModule,
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
    HikeActivePage,
    Timer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GeolocationService,
    CurrentHikingService,
    TimerService,
    OpenDataService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
