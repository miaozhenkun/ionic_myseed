import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
 import { Device } from '@ionic-native/device';
import {NativeService} from "../../providers/NativeService";
import { ZBar, ZBarOptions } from '@ionic-native/zbar';
import {TestDemoPage} from "./test-demo/test-demo";
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  UserPostion;
  device;
  constructor(public navCtrl: NavController,private NativeService:NativeService,private  Device:Device,private zbar: ZBar) {

  }
  ionViewDidEnter(){

    // this.timer = setInterval(() => {
    //   this.ctime=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
    //   // this.config.series[0].data[0]=new Date().getSeconds()*10;
    // }, 1000);
  }
  getGps(){
    this.NativeService.getUserGps().subscribe(
      data=>{
        this.UserPostion= JSON.stringify(data, null, 4);
        console.log(this.UserPostion);
        this.navCtrl.push(TestDemoPage,data);
        // this.NativeService.showToast(JSON.stringify(data, null, 4));
      });
  }
  getDevice(){
    this.navCtrl.push(TestDemoPage,this.Device);
     // this.NativeService.showToast(this.Device.model+'----'+this.Device.uuid+'----'+this.Device.serial);
     // this.device= JSON.stringify(this.Device);
  }
  scan() {
    let options: ZBarOptions = {
      flash: 'auto',
      text_title: '扫码',
      text_instructions: '请对准要扫描的条形码或二维码',
      drawSight: true
    };

    this.zbar.scan(options)
      .then(result => {
        this.NativeService.showToast("结果：" +result);
      })
      .catch(error => {
        this.NativeService.showToast(error);
      });
  }


}
