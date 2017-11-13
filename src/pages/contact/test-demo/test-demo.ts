import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-test-demo',
  templateUrl: 'test-demo.html',
})
export class TestDemoPage {
  UserPostion;
  Device;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('构造函数');
    console.log(this.navParams.data);
    if(this.navParams.data.time){
      this.UserPostion=this.navParams.data;
    }else if (this.navParams.data.model){
      this.Device=this.navParams.data;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestDemoPage');

    // if( this.navParams.UserPostion!=null){
    //
    // }

  }
  goBack() {
    this.navCtrl.pop();
  }

}
