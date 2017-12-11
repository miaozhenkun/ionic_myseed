import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  //关于我们
  goAboutUs(){
    this.navCtrl.push('AboutusPage');
  }
  //修改密码
  goSerPassword(){
    this.navCtrl.push('ChangePasswordPage');
  }
  //手势登录
  goGenLogin(){
    this.navCtrl.push('SignOnPage');
  }
}
