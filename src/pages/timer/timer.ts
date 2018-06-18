import { Component } from '@angular/core';
import { TimerService } from '../../Service/TimerService';

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
