import { Component,ViewChild} from '@angular/core';
import {IonicPage,Tabs } from 'ionic-angular';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
// import { DemoPage } from '../demo/demo';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs: Tabs;
  tab1Root = 'HomePage';
  tab2Root = 'AboutPage';
  tab3Root = 'ContactPage';
  tab4Root = 'option';
  tab5Root = 'DemoPage';
  constructor() {

  }
}
