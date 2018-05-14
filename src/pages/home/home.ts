import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private _firstName: String = "Guillaume";
  private _lastName: String = "Mariot";

  constructor() {

  }

  get fullName() {
    return this._firstName+" "+this._lastName;
  }

}
