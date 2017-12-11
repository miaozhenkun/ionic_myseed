import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  params:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter() {
    this.params={};
  }
  submit(){
    console.log( this.params);
  }
}
