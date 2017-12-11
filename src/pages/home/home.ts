import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage  {
  searchText: string;
  @ViewChild('ionSlides') slides;
  // @ViewChild('cerchart') container: ElementRef;
  constructor(public navCtrl: NavController) {

  }
  ngAfterContentInit(){

  }
  ionViewDidEnter() {
    this.slides.startAutoplay();
    this.slides.autoplayDisableOnInteraction = false;
    console.log('start');
  }
  //页面离开时停止自动播放
  ionViewDidLeave(){
    this.slides.stopAutoplay();
    console.log('stop');
  }

  onInput(event) {
    if (this.searchText.trim().length > 0) {

    } else {

    }
  }

  onFocus() {
    // this.onFocusInput = true;
    // let tabBarElement: any = document.querySelector('#myTabs .tabbar.show-tabbar');
    // tabBarElement.style.opacity = 0;
  }
  onBlur() {
  }
  slideTap(){

  }


}
