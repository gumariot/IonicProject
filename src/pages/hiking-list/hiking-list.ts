import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Hike } from '../../Model/Hike';
import { HikeDetailPage } from '../hike-detail/hike-detail';
import { OpenDataService } from '../../Service/OpenDataService';
import { TimerService } from '../../Service/TimerService';

@Component({
  selector: 'hiking-list',
  templateUrl: 'hiking-list.html'
})
export class ListHiking {
  private _hikes: Array<Hike>;
  private _timerService: TimerService;

  constructor(public navCtrl: NavController, public navParams: NavParams,public openDataService: OpenDataService, public timerService: TimerService) {
    this._hikes = openDataService.importedHikes;
    this._timerService = timerService;
  }

  get hikes(){
    return this._hikes;
  }

  itemTapped(event, item) {
    this.navCtrl.push(HikeDetailPage, {
      item: item
    });
  }

  itemTappedFav(event, item) {
    if(item.favorite){
      item.favorite = false;
    }else{
      item.favorite = true;
    }
  }
}
