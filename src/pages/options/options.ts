import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DatabaseProvider} from "../../providers/DatabaseProvider";
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
  developer = {};
  developers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
               // private databaseprovider:DatabaseProvider
  ) {

    // this.databaseprovider.getDatabaseState().subscribe(rdy => {
    //   if (rdy) {
    //     this.loadDeveloperData();
    //   }
    // })
  }

  ionViewDidEnter() {

  }
  loadDeveloperData() {
    // this.databaseprovider.getAllDevelopers().then(data => {
    //   this.developers = data;
    // })
  }
  addDeveloper() {
    // this.databaseprovider.addDeveloper(this.developer['name'], this.developer['skill'], parseInt(this.developer['yearsOfExperience']))
    //   .then(data => {
    //     this.loadDeveloperData();
    //   });
    this.developer = {};
  }

}
