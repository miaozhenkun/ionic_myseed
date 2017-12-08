import { Component } from '@angular/core';
import {NavController, IonicPage, NavParams} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {NativeService} from "../../providers/NativeService";
import {DatabaseProvider} from "../../providers/DatabaseProvider";
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  instance;
  developer = {};
  developers = [];
  promiseData: string;
  meassage;
  constructor(public navCtrl: NavController, public navParams: NavParams,private  nativeService :NativeService,
              private databaseprovider:DatabaseProvider
  ) {

    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      console.log(rdy);
      if (rdy) {
        this.loadDeveloperData();
      }
    })
    // this.loadDeveloperData();
  }

  ionViewDidEnter() {
    let that=this;
    this.getPromise().then(
      v =>{
        this.promiseData = v;
        console.log(v);
      },err=>{
        this.meassage=err;
        console.log(err);
      } );
  }

  loadDeveloperData() {
    this.databaseprovider.getAllDevelopers().then(data => {
      console.log(data);
      this.developers = data;
    })

  }
  addDeveloper() {

    this.developer = {};
  }
  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve('Promise complete!');
        reject('成功了');
      }, 2000);
    });
  }



}
