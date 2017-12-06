import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { employeeListPage } from './base/employeeList';
@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html'
})
export class patientPage {

  constructor(public navCtrl: NavController) {

  }
  goemployeeListPage(){
    this.navCtrl.push(employeeListPage);
  }
}
