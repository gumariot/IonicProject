export class Hike{
  private _name: String;
  private _length: Number;
  private _duration: String;
  private _incline: Number;
  private _difficulty: String;
  private _color: String;
  private _description: String;

  constructor(name: String,length: Number, duration: String, incline: Number, difficulty: String, color: String, description: String) {
    this._name = name;
    this._length = length;
    this._duration = duration;
    this._incline = incline;
    this._difficulty = difficulty;
    this._color = color;
    this._description = description;
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

  get color(){
    return this._color;
  }

  get description(){
    return this._description;
  }

  get difficulty(){
    return this._difficulty;
  }

  get formatedLength(){
    return this._length + " km";
  }
}
