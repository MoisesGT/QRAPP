import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage,HomePage,GuardadosPage,MapaPage } from '../pages/index.paginas';

//Mapas
import { AgmCoreModule } from '@agm/core';

//Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Contacts } from '@ionic-native/contacts';


//Services
import { HistorialProvider } from '../providers/historial/historial';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    GuardadosPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4YFaT5DvwhhhqMpDP2pBInoG8BTzA9JY'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    GuardadosPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    HistorialProvider,
    InAppBrowser,
    Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistorialProvider
  ]
})
export class AppModule {}
