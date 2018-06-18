import { Component } from '@angular/core';
import { Hike } from '../../Model/Hike';
import { HikeActivePage } from '../hiking-active/hiking-active';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { CurrentHikingService } from '../../Service/CurrentHikingService';
import { TimerService } from '../../Service/TimerService';

/*
* Détail visible lorsque clique sur une randonnées dans la liste
*/
@Component({
  selector: 'hike-detail',
  templateUrl: 'hike-detail.html'
})
export class HikeDetailPage {
  private _hike: Hike;
  private _currentHiking: CurrentHikingService;
  private _timerService: TimerService;

  constructor(public navCtrl: NavController, public navParams: NavParams, public currentHiking: CurrentHikingService, public timerService: TimerService) {
    this._hike = navParams.get('item');
    this._currentHiking = currentHiking;
    this._timerService = timerService;
  }

  itemTapped(event, item) {
    this._timerService.startTimer();
    this._timerService.setPlay();
    this._currentHiking.addHike(this._hike);
    this.navCtrl.push(HikeActivePage, {
      item: this._hike
    });
  }
}
