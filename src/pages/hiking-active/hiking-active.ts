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
  private lastStep: Number;

  // google maps
  private zoom: number = 16;
  private lat: number;
  private lng: number;
  private dir = undefined;
  private renderOptions = { suppressMarkers: true }

  constructor(public navCtrl: NavController, public navParams: NavParams, public currentHiking: CurrentHikingService, public alertCtrl: AlertController,  public geoService: GeolocationService) {
    geoService.getPositionUpdated().subscribe((pos: Position) => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    });
    this._hike = currentHiking.currentHike;
    this.lastStep = this._hike.listStep.length-1;
    console.log(this.lastStep)
    this._currentHikingService = currentHiking;
    this.prepareStep();
  }

  itemDeactivate(event) {
    this._hike.active = false;
    this._currentHikingService.resetHike();
    this.navCtrl.push(ListHiking, {});
  }

  private prepareStep(){
    let directionArray = [];
    for(let i=0; i<this._hike.listStep.length; i++){
      if(i+1 < this._hike.listStep.length){
        let currentInfo = {
          origin: { lat: this._hike.listStep[i].lat, lng: this._hike.listStep[i].lng, mode: 'TRANSIT' },
          destination: { lat: this._hike.listStep[i+1].lat, lng: this._hike.listStep[i+1].lng, mode: 'TRANSIT' },
        };
        directionArray.push(currentInfo);
      }
    }
    this.dir = directionArray;
  }
}

//A GRATTER: https://stackoverflow.com/questions/46763420/how-to-alternate-color-of-polyline-with-angular-2-using-agm-map-agm-polyline
