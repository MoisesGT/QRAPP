import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import {HomePage,GuardadosPage} from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any=HomePage;
  tab2:any=GuardadosPage;
  
  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
