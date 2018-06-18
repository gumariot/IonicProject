import { Component } from '@angular/core';

import { Hike } from '../../Model/Hike';

import { OpenDataService } from '../../Service/OpenDataService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private _hikes: Array<Hike>;

  constructor(public openDataService: OpenDataService) {
    this._hikes = openDataService.importedHikes;
  }

  get hikes(){
    console.log(this._hikes);
    return this._hikes;
  }
}
