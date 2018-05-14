export class Hike{
  private _name: String;
  private _length: Number;
  private _duration: String;
  private _incline: Number;
  private _difficulty: String;

  constructor(name: String,length: Number, duration: String, incline: Number, difficulty: String) {
    this._name = name;
    this._length = length;
    this._duration = duration;
    this._incline = incline;
    this._difficulty = difficulty;
  }

  get length(){
    return this._length;
  }

  get name(){
    return this._name;
  }

  get duration(){
    return this._duration;
  }

  get incline(){
    return this._incline;
  }

  get difficulty(){
    return this._difficulty;
  }

  get formatedLength(){
    return this._length + " km";
  }
}
