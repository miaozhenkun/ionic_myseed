import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage  {
  gener;
  constructor(public navCtrl: NavController) {

  }
  ngAfterContentInit(){
    this.gener='01';
  }

}
