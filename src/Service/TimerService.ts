import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private _minutes: number = 0;
  private _secondes: number = 0;
  private _totalSecondes: number = 3560;
  private _heures: number = 0;
  private _timer;

  private _play: boolean = true;
  private _stop: boolean = false;
  private _backward: boolean = false;

  get minutes(): number { return this._minutes; }
  get secondes(): number { return this._secondes; }
  get heures(): number { return this._heures; }
  get stop(): boolean { return this._stop; }
  get backward(): boolean { return this._backward; }
  get play(): boolean { return this._play; }

  startTimer() {
    this._timer = setInterval(() => {
      ++this._totalSecondes;
      this._heures = Math.floor(this._totalSecondes / 60 / 60);
      this._minutes = Math.floor((this._totalSecondes - (this._heures * 60 * 60))/ 60);
      this._secondes = this._totalSecondes - this._heures * 60 * 60 - this._minutes * 60;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this._timer);
  }

  resetTimer() {
    this._totalSecondes = this._minutes = this._secondes = this._heures = 0;
  }

  setPlay() {
    this._stop = true;
    this._play = this._backward = false;
  }
  setStop() {
    this._stop = false;
    this._play = this._backward = true;
  }
  setBackward() {
    this._play = true;
    this._stop = this._backward = false;
  }
}
