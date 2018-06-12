import { Component } from '@angular/core';
import { TimerService } from '../../Service/TimerService';

@Component({
    selector: 'chronometre',
    templateUrl: 'timer.html'
})
export class Timer {
    private _btnPlay: string = 'Démarrer';
    private _timer: TimerService;

    constructor(public timer: TimerService) {
      this._timer = timer;
    }

    play() {
        this._timer.startTimer();
        this._timer.setPlay();
        this._btnPlay = 'Continuer';
    }
    stop() {
        this._timer.stopTimer();
        this._timer.setStop();
    }
    backward() {
        this._timer.resetTimer();
        this._timer.setBackward();
        this._btnPlay = 'Démarrer';
    }
}
