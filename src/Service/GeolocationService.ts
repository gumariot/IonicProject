import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';

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

  watchPosition(){
    return new Promise((resolve,error)=>{
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        resolve(data);
      });
    })
  }

}
