import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage  {
  // @ViewChild('cerchart') container: ElementRef;
  constructor(public navCtrl: NavController) {

  }
  ngAfterContentInit(){

  }
  ionViewDidEnter() {

  }



}
