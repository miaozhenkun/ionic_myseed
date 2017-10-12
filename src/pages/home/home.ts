import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
declare var echarts;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage  {
  @ViewChild('container') container: ElementRef;
  chart: any;

  gener;
  purName;
  config;
  constructor(public navCtrl: NavController) {

  }
  ngAfterContentInit(){
    this.gener='01';
    this.purName=null;
    this.config={a:12,b:23};
  }
  ionViewDidEnter() {

  }

}
