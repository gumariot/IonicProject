import { Component } from '@angular/core';
import { TimerService } from '../../Service/TimerService';

/*
* Timer de l'application
*/
@Component({
    selector: 'chronometre',
    templateUrl: 'timer.html'
})
export class Timer {
    private _timer: TimerService;

    constructor(public timer: TimerService) {
      this._timer = timer;
    }
}
