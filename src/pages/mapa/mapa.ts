import { Component } from '@angular/core';
import { IonicPage,NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat:number;
  lng:number;

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController) {
    //this.lat=14.5859583;
    //this.lng=-90.60773089999998;
    
    let coordsArray=this.navParams.get("coords").split(",");

    this.lat =Number( coordsArray[0].replace("geo:","") );
    this.lng = Number( coordsArray[1] );

    console.log(this.lat,this.lng);
  }

  cerrar_modal(){
    this.viewCtrl.dismiss();
  }

}
