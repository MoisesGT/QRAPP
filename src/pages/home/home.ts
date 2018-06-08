import { Component } from '@angular/core';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//Components
import { ToastController,Platform } from 'ionic-angular';

//Providers
import { HistorialProvider } from '../../providers/historial/historial';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform:Platform,
              private _historialService:HistorialProvider) { }

  scan(){
    console.log("Realizando scan...");
  
    if(!this.platform.is('cordova')){
      this._historialService.agregar_historial("http://google.com");
      return;
    }

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Result: ', barcodeData.text);
      console.log('Format: ', barcodeData.format);
      console.log('Cancelled: ', barcodeData.cancelled);

      if(barcodeData.cancelled==false && barcodeData.text != null){
        this._historialService.agregar_historial(barcodeData.text);
      }
     }).catch(err => {
         console.log('Error', err);
         this.mostrar_error("Error: " + err);
     });  
  }

  mostrar_error(mensaje:string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }
}
