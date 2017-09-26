import {Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import Chart from 'chart.js';
/*
  Generated class for the ChartjsDemo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chartjs-demo',
  templateUrl: 'chartjs-demo.html'
})
export class ChartjsDemoPage {
  @ViewChild('chartBar') chartBar: ElementRef;
  @ViewChild('chartLine') chartLine: ElementRef;
  @ViewChild('chartPie') chartPie: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  details(url){

  }

}
