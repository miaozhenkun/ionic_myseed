// 消息提醒
import {Platform, Nav, ToastController} from 'ionic-angular';
import {Injectable} from "@angular/core";
@Injectable()
export class UTIL_DIALOG {
  toast:ToastController;
  constructor(private ToastController:ToastController) {
    this.toast=ToastController;
  }
  showMessage (message:any, duration:any="2000", position:any="bottom"){
    let toast = this.toast.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
