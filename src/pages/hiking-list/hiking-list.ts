import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Hike } from '../../Model/Hike';
import { Step } from '../../Model/Step';
import { HikeDetailPage } from '../hike-detail/hike-detail';
import { OpenDataService } from '../../Service/OpenDataService';

@Component({
  selector: 'hiking-list',
  templateUrl: 'hiking-list.html'
})
export class ListHiking {
  private _hikes: Array<Hike>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public openDataService: OpenDataService ) {
    this._hikes = openDataService.importedHikes;
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
