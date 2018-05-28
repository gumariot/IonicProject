import { Component } from '@angular/core';
import { Hike } from '../../Model/Hike';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { CurrentHiking } from '../../Service/CurrentHiking';

import { ListHiking } from '../../pages/hiking-list/hiking-list';


@Component({
  selector: 'hiking-active',
  templateUrl: 'hiking-active.html'
})
export class HikeActivePage {
  private _hike: Hike;
  private _currentHiking: CurrentHiking;

  constructor(public navCtrl: NavController, public navParams: NavParams, public currentHiking: CurrentHiking, public alertCtrl: AlertController) {
    this._hike = currentHiking.currentHike;
    this._currentHiking = currentHiking;
    if(this._hike == null){
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'There is no data to display !',
        buttons: [
          {
            text: 'OK',
            role: 'OK',
            handler: () => {
              this.navCtrl.push(ListHiking, {
              });
            }
          }
        ]
      });
      alert.present();
    }
  }

  itemDeactivate(event) {
    this._hike.active = false;
    this._currentHiking.resetHike();
    this.navCtrl.push(ListHiking, {});
  }
}
