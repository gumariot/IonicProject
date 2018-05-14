import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Hike } from '../../Model/Hike';
import { HikeDetailPage } from '../hike-detail/hike-detail';

@Component({
  selector: 'hiking-list',
  templateUrl: 'hiking-list.html'
})
export class ListHiking {
  private _hikes: Array<Hike>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._hikes = [];
    this._hikes.push(new Hike("La balade du puy de dôme",15, "2h15", "400", "green"));
    this._hikes.push(new Hike("Découverte de Clermont-Ferrand",26, "2h15", "400", "green"));
  }

  get hikes(){
    return this._hikes;
  }

  itemTapped(event, item) {
    this.navCtrl.push(HikeDetailPage, {
      item: item
    });
  }

}
