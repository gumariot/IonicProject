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
    openDataService.getAll().then((succ)=>{
      console.log(succ)
    });
    this._hikes = [];
    this._hikes.push(new Hike("La balade du puy de dôme",15, "2h15", 400, "Easy", "green", "This is a description", false, 5, "46 rue de laloy, Clermont-Fd", [
      new Step(46.2219, 5.48327, "1", 'Tourner à droite',"assets/imgs/start.png"), new Step(46.222,5.48316 , "2", 'Turn left',"assets/imgs/step.png"), new Step(46.2205,5.51173 , "3", 'Stop you reached the end', "assets/imgs/end.png")
    ]));
    this._hikes.push(new Hike("La balade de laloy",15, "2h15", 400, "Easy", "green", "This is a description", false, 5, "46 rue de laloy, Clermont-Fd", [
      new Step(46.1513, 5.60399, "1", 'Tourner à droite',"assets/imgs/start.png"), new Step(46.1601,5.57026, "2", 'Turn right',"assets/imgs/step.png"), new Step(46.1413,5.55321, "3", 'Turn right', "assets/imgs/end.png")
    ]));
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
