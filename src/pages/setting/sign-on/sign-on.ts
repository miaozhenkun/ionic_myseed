import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-on',
  templateUrl: 'sign-on.html',
})
export class SignOnPage {
  IMG_PATH;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toast: ToastController) {
    this.IMG_PATH="http://img.dongqiudi.com/uploads/avatar/2015/07/25/QM387nh7As_thumb_1437790672318.jpg";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignOnPage');

  }
  getPwdResult(List){
    let toast = this.toast.create({
      message: List.toString(),
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
