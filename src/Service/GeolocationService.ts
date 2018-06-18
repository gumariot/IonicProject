import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

/*
* Service représentant la géolocalisation
*/
@Injectable()
export class GeolocationService {

  private _geo: Geolocation;

  constructor(private geolocation: Geolocation){
    this._geo = geolocation;
  }

  getCurrentPosition(){
    return new Promise((resolve,error)=>{
      this.geolocation.getCurrentPosition().then((resp) => {
       let lat = resp.coords.latitude;
       let lgt = resp.coords.longitude;
       resolve([lat,lgt]);
      }).catch((error) => {
        error('Error getting location');
      });
    })
  }

  getPositionUpdated(): Observable<Position> {
    return Observable.create(
      (observer) => {
      navigator.geolocation.watchPosition((pos: Position) => {
        observer.next(pos);
      }),
      {
        enableHighAccuracy: true
      };
    });
  }
}
