import { Component } from '@angular/core';
import { Hike } from '../../Model/Hike';
import { HikeActivePage } from '../hiking-active/hiking-active';
import { NavController, NavParams } from 'ionic-angular';

import { CurrentHiking } from '../../Service/CurrentHiking';


@Component({
  selector: 'hike-detail',
  templateUrl: 'hike-detail.html'
})
export class HikeDetailPage {
  private _hike: Hike;
  private _currentHiking: CurrentHiking;

  constructor(public navCtrl: NavController, public navParams: NavParams, public currentHiking: CurrentHiking) {
    this._hike = navParams.get('item');
    this._currentHiking = currentHiking;
  }

  itemTapped(event, item) {
    this._currentHiking.addHike(this._hike);
    this.navCtrl.push(HikeActivePage, {
      item: this._hike
    });
  }
}
