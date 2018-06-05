import { Component } from '@angular/core';
import { Hike } from '../../Model/Hike';
import { HikeActivePage } from '../hiking-active/hiking-active';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { CurrentHikingService } from '../../Service/CurrentHikingService';


@Component({
  selector: 'hike-detail',
  templateUrl: 'hike-detail.html'
})
export class HikeDetailPage {
  private _hike: Hike;
  private _currentHiking: CurrentHikingService;

  constructor(public navCtrl: NavController, public navParams: NavParams, public currentHiking: CurrentHikingService) {
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
