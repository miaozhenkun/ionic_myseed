import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { employeeListPage } from './base/employeeList';

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
