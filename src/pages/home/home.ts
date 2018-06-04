import { Component } from '@angular/core';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//Components
import { ToastController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController) { }

  scan(){
    console.log("Realizando scan...");

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Result: ', barcodeData.text);
      console.log('Format: ', barcodeData.format);
      console.log('Cancelled: ', barcodeData.cancelled);
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
