import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage  {
  searchText: string;
  // @ViewChild('cerchart') container: ElementRef;
  constructor(public navCtrl: NavController) {

  }
  ngAfterContentInit(){

  }
  ionViewDidEnter() {

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
