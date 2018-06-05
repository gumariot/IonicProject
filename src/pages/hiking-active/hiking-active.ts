import { Component } from '@angular/core';
import { Hike } from '../../Model/Hike';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { CurrentHikingService } from '../../Service/CurrentHikingService';
import { GeolocationService } from '../../Service/GeolocationService';

import { ListHiking } from '../../pages/hiking-list/hiking-list';


@Component({
  selector: 'hiking-active',
  templateUrl: 'hiking-active.html'
})
export class HikeActivePage {
  private _hike: Hike;
  private _currentHikingService: CurrentHikingService;

  // google maps
  private zoom: number = 16;
  private lat: number;
  private lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public currentHiking: CurrentHikingService, public alertCtrl: AlertController,  public geoService: GeolocationService) {
    let res = geoService.getCurrentPosition();
    res.then((data)=>{
      this.lat = data[0];
      this.lng = data[1];
    })
    this._hike = currentHiking.currentHike;
    this._currentHikingService = currentHiking;
  }

  itemDeactivate(event) {
    this._hike.active = false;
    this._currentHikingService.resetHike();
    this.navCtrl.push(ListHiking, {});
  }
}
