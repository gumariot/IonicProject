import { Injectable } from '@angular/core';
import { Http,HttpModule  } from '@angular/http';
import { Hike } from '../Model/Hike';
import { Step } from '../Model/Step';

@Injectable()
export class OpenDataService {

  private _importedHikes: Array<Hike>;
  private _importedSteps: Array<Step>;

  constructor(private http : Http){
    this._importedSteps = [];
    this._importedHikes = [];
  }

  getAll(){
    return new Promise((resolve)=>{
      this.http.get("/assets/data/data.json").subscribe((succ)=>{
        let jsonData  = succ.json();
        jsonData["features"].forEach((elt)=>{
          let hikePath = elt["geometry"]["coordinates"];
          let hikeDetails = elt["properties"];
          let icon = "assets/imgs/start.png";
          let stepNumbers = hikePath.length;
          hikePath.forEach((coord,idx)=>{
            if(idx > 0){
                icon = "assets/imgs/step.png";
            }else if(idx == stepNumbers){
              icon = "assets/imgs/end.png";
            }
            this._importedSteps.push(new Step(coord[0], coord[1], idx, '',icon));
          })
          this._importedHikes.push(new Hike(hikeDetails["name"],15, hikeDetails["duration"], hikeDetails["incline"], hikeDetails["difficulty"], hikeDetails["color"], hikeDetails["description"], false, hikeDetails["mark"], hikeDetails["adr"], this._importedSteps));
          console.log(this._importedHikes)
          this._importedSteps = [];
        })
        resolve(this._importedHikes);
      })
    })
  }
}
