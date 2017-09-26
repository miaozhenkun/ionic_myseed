import {Component, ElementRef, Injector, ViewChild} from '@angular/core';
import {NavController,ModalController,ToastController} from 'ionic-angular';
import {ChartjsDemoPage} from "./chartjs-demo/chartjs-demo";
import {LookService} from "../../providers/look-service";
import {PaginationDemoPage} from  "./pagination-demo/pagination-demo";
import {WorkMapPage} from  "./work-map/work-map";
import {LoginPage} from  "../user/login/login";

import {PreviewPicturePage} from "../../common/preview-picture/preview-picture";
@Component({
  selector: 'page-contact',
  templateUrl: 'demo.html',
})

export class DemoPage {
  obj_CategorysListData;
  errorMessage: string;
  toast: any = ToastController;
  constructor(private navCtrl: NavController,private LookService:LookService,protected rt: ElementRef, protected ij: Injector,private modalCtrl: ModalController,toast: ToastController) {
    //super(rt, ij);
    this.toast=toast;
  }
  chartjs() {
    this.navCtrl.push(ChartjsDemoPage);
  }
  page(){
    this.navCtrl.push(PaginationDemoPage);
  }
  gomap(){
    this.navCtrl.push(WorkMapPage);
  }
  goLogin(){
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    this.LookService.getData().subscribe(
      data=>{
          console.log(data.data);
          console.log(data.data.message);
          this.obj_CategorysListData=data.data.message;
      }
    )
  }
  @ViewChild('areasSelect') areasSelect;
  showAreasSelect() {
    this.areasSelect.open();
  }
  done(data) {
    console.log(data);
  }
  closeSelect() {
    //this.showAlert('you click close');
  }
  getpic(index){
    console.log(index);
    let picturePaths = [];
    picturePaths.push(index);
    // for (let fileObj of this.fileObjList) {
    //   picturePaths.push(fileObj.origPath);
    // }
    this.modalCtrl.create(PreviewPicturePage, {'initialSlide': 0, 'picturePaths':picturePaths}).present();
  }
  Toast(){
    let toast = this.toast.create({
      message: '点击了！！！',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }


}
