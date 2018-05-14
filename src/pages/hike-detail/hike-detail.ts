import { Component } from '@angular/core';
import { Hike } from '../../Model/Hike';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'hike-detail',
  templateUrl: 'hike-detail.html'
})
export class HikeDetailPage {
  private _hike: Hike;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._hike = navParams.get('item');
  }
}
