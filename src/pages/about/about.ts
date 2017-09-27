import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { employeeListPage } from './base/employeeList';
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  goemployeeListPage(){
    this.navCtrl.push(employeeListPage);
  }
}
