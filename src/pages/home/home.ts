import { Component } from '@angular/core';

import { Hike } from '../../Model/Hike';

import { OpenDataService } from '../../Service/OpenDataService';

/*
* Affiche les randonnées favorites
*/
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
    return this._hikes;
  }
}
