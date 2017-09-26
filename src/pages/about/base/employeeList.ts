import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserService } from '../../../providers/UserService';
@Component({
  selector: 'page-employeeList',
  templateUrl: 'employeeList.html'
})
export class employeeListPage {
  items:any=[];
  constructor(public navCtrl: NavController,private userService:UserService) {

  }

  ionViewDidLoad() {
    this.userService.getStaffList(null).subscribe(data=>{
      console.log(data);
      if(data.data){
        this.items=data.data.rows;
        console.log(this.items);
      }
    })
  }
  goBack() {
    this.navCtrl.pop();
  }
}
