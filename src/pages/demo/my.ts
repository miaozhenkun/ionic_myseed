import {Component, ElementRef, Injector, ViewChild} from '@angular/core';
import {NavController,ModalController,ToastController,IonicPage} from 'ionic-angular';
import {ChartjsDemoPage} from "./chartjs-demo/chartjs-demo";
import {LookService} from "../../providers/look-service";
import {PaginationDemoPage} from  "./pagination-demo/pagination-demo";
import {WorkMapPage} from  "./work-map/work-map";
import {LoginPage} from  "../user/login/login";
import {PreviewPicturePage} from "../../common/preview-picture/preview-picture";

import {UserService} from "../../providers/UserService";
import {NativeService} from "../../providers/NativeService";

import {TransitionDemoPage} from "./transition-demo/transition-demo";

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  obj_CategorysListData;
  errorMessage: string;
  IMG_PATH;
  toast: any = ToastController;
  constructor(private navCtrl: NavController,private LookService:LookService,private modalCtrl: ModalController,toast: ToastController
  ,private UserService:UserService,private NativeService:NativeService
  ) {
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
    this.IMG_PATH="http://img.dongqiudi.com/uploads/avatar/2015/07/25/QM387nh7As_thumb_1437790672318.jpg";
    // this.LookService.getData().subscribe(
    //   data=>{
    //       this.obj_CategorysListData=data.data.message;
    //   }
    // );
  }
  ngOnInit(){
    // this.UserService.getAvatar().subscribe(
    //   data=>{
    //     this.IMG_PATH=data.data;
    //   }
    // )
  }
  @ViewChild('areasSelect') areasSelect;
  showAreasSelect() {
    this.areasSelect.open();
  }
  done(data) {
    console.log(data);
  }
  closeSelect() {

  }
  getpic(index){
    console.log(index);
    let picturePaths = [];
    picturePaths.push(index);
    this.modalCtrl.create(PreviewPicturePage, {'initialSlide': 0, 'picturePaths':picturePaths}).present();
  }
  Toast(){
    this.NativeService.showToast('点击了！！！');
  }
  private selectHead(){
      // this.NativeService.getPicture().subscribe(data=>{
      //   this.UserService.updateAvatar(data).subscribe(result=>{
      //     this.UserService.getAvatar().subscribe(
      //       data=>{
      //         this.IMG_PATH=data.data;
      //       });
      //   });
      // });
  }


  pageTransition() {
    this.navCtrl.push(TransitionDemoPage);
  }



}
