import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserService} from '../../../providers/UserService';
import {GlobalData} from  '../../../providers/GlobalData';
import {UTIL_DIALOG} from "../../../common/UTIL_DIALOG";
import {SPEDATA} from "../../../common/SPEDATA";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userInfoKey = "USER_INFO";
  params = {};
  constructor(private SPEDATA:SPEDATA, public navCtrl: NavController,private userService:UserService,private globalData:GlobalData,private UTIL_DIALOG:UTIL_DIALOG) {
  }
  login(){
    console.log(this.params);
    this.userService.login(this.params).subscribe(data=>{
      console.log(data.data);
      if(data.data){
        this.UTIL_DIALOG.showMessage("登录成功");
        this.globalData.token=data.data.token;
        this.globalData.userId=data.data.id;
        this.globalData.username=data.data.userName;
        this.navCtrl.pop();
      }else {
        this.UTIL_DIALOG.showMessage(data.msg);
      }

    })
    console.log("点击登录");
  }
}
