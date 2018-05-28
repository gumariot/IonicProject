import { Injectable } from '@angular/core';
import { Hike } from '../Model/Hike';

@Injectable()
export class CurrentHiking {

  private _currentHike: Hike;

  constructor(){
    this._currentHike = null;
  }

  addHike(hike: Hike){
    this._currentHike = hike;
    this._currentHike.active = true;
  }

  get currentHike(){
    return this._currentHike;
  }

  resetHike(){
    this._currentHike = null;
  }
}
