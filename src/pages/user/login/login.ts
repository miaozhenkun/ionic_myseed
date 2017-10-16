import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserService} from '../../../providers/UserService';
import {GlobalData} from  '../../../providers/GlobalData';
import {UTIL_DIALOG} from "../../../common/UTIL_DIALOG";
import {SPEDATA} from "../../../common/SPEDATA";
import { Storage } from '@ionic/storage';
import {TabsPage} from "../../tabs/tabs";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userInfoKey = "USER_INFO";
  params = {};
  constructor(private SPEDATA:SPEDATA, public navCtrl: NavController,private userService:UserService,private globalData:GlobalData,private UTIL_DIALOG:UTIL_DIALOG,public storage: Storage) {
  }
  login(){
    console.log(this.params);
    this.userService.login(this.params).subscribe(data=>{
      console.log(data.data);
      if(data.data){
        this.UTIL_DIALOG.showMessage("登录成功");
        this.storage.set('token', data.data.token);
        this.globalData.token=data.data.token;
        this.globalData.userId=data.data.id;
        this.globalData.username=data.data.userName;
        // this.SPEDATA.initDB();
        // this.SPEDATA.insert(data.data.id,data.data.token,data.data.userName);
        this.navCtrl.push(TabsPage);
      }
    })
  }
}
