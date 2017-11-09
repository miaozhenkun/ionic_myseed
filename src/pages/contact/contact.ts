import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
 import { Device } from '@ionic-native/device';
import {NativeService} from "../../providers/NativeService";
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  UserPostion;
  device;
  constructor(public navCtrl: NavController,private NativeService:NativeService,private  Device:Device) {

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
        // this.NativeService.showToast(JSON.stringify(data, null, 4));
      });
  }
  getDevice(){
     this.NativeService.showToast(this.Device.model+'----'+this.Device.uuid+'----'+this.Device.serial);
     this.device= JSON.stringify(this.Device);
  }



}
