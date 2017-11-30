import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DatabaseProvider} from "../../providers/DatabaseProvider";
import {NativeService} from "../../providers/NativeService";

declare var RongIMLib;
/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({name:'option'})
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {
  conversationtype = RongIMLib.ConversationType.PRIVATE;
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
     // this.databaseprovider.executeSql('select * from listdata_local where module = ? and user_id = ?',
     //   ['LIST_MODULE_MESSAGE','13255544444']).then(data=>{
     // },err=>{
     //
     //   })
  }
  addDeveloper() {
    // this.databaseprovider.addDeveloper(this.developer['name'], this.developer['skill'], parseInt(this.developer['yearsOfExperience']))
    //   .then(data => {
    //     this.loadDeveloperData();
    //   });
    // console.log("点击了");
    this.developer = {};
  }
  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       // resolve('Promise complete!');
        reject('失败了');
      }, 2000);
    });
  }

}
