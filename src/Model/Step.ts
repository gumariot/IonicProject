export class Step{
  private _lng: number;
  private _lat: number;
  private _name: String;
  private _desc: String;
  private _flag: String;


  constructor(lat: number, lng: number, name: String, desc: String, flag: String) {
    this._lng = lng;
    this._lat = lat;
    this._name = name;
    this._desc = desc;
    this._flag = flag;
  }

  get lng(){
    return this._lng;
  }

  get lat(){
    return this._lat;
  }

  get name(){
    return this._name;
  }

  get desc(){
    return this._desc;
  }

  get flag(){
    return this._flag;
  }
}
