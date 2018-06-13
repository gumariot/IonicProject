import { Injectable } from '@angular/core';
import { Http,HttpModule  } from '@angular/http';
import { Hike } from '../Model/Hike';
import { Step } from '../Model/Step';

@Injectable()
export class OpenDataService {

  private _importedHikes: Array<Hike>;

  constructor(private http : Http){
    this._importedHikes = [];
    this.getAll().then((succ: Array<Hike>)=>{
      this._importedHikes = succ;
    });
  }

  getAll(){
    return new Promise((resolve)=>{
      this.http.get("/assets/data/data.json").subscribe((succ)=>{
        let jsonData  = succ.json();
        let len;
        for(let i=0; i < jsonData["features"].length; i++){
          let hikePath = jsonData["features"][i]["geometry"]["coordinates"];
          let hikeDetails = jsonData["features"][i]["properties"];
          let icon = "assets/imgs/start.png";
          this.initializeStep(hikePath).then((succStep : Array<Step>) => {
            this._importedHikes.push(new Hike(hikeDetails["name"],15, hikeDetails["duration"], hikeDetails["incline"], hikeDetails["difficulty"], hikeDetails["color"], hikeDetails["description"], false, hikeDetails["mark"], hikeDetails["adr"], succStep));
          })
        }
        resolve(this._importedHikes);
      })
    })
  }

  private initializeStep(hikePath){
    return new Promise((resolve)=>{
      let icon = "assets/imgs/start.png";
      let _importedSteps: Array<Step> = [];
      hikePath = hikePath[0];
      for(let j=0; j < hikePath.length; j++){
        if(j == hikePath.length-1){
            icon = "assets/imgs/end.png";
        }else if(j > 0){
          icon = "";
        }
        _importedSteps.push(new Step(hikePath[j][1], hikePath[j][0], j.toString(), '',icon));
      }
      resolve(_importedSteps);
    })
  }

  get importedHikes(){
    return this._importedHikes;
  }
}
